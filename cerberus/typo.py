from io import StringIO

from helpers import WEB_URL, Router

import requests
from mitmproxy import http
from symspellpy import SymSpell, Verbosity


def remove_dots(string: str) -> str:
    return "".join(string.split("."))


class SpellChecker(Router):
    POPULAR_DOMAINS = [
        "google.com", "gmail.com", "youtube.com", "github.com", "stackoverflow.com", "stackexchange.com", "reddit.com",
        "lobste.rs", "news.ycombinator.com", "outlook.com"
    ]

    def __init__(self):
        super().__init__({
            "typo": self.process_state_update_request
        })

        self.sym_spell = SymSpell()

        self.dict = {
            remove_dots(name): name for name in self.POPULAR_DOMAINS
        }
        self.sym_spell.create_dictionary(StringIO(
            "\n".join(self.dict.keys())
        ))

        self.state = {}

    def process_state_update_request(self, flow: http.HTTPFlow) -> None:
        if blacklist_domain := flow.request.query.get("blacklist"):
            self.state[blacklist_domain] = False

        if whitelist_domain := flow.request.query.get("whitelist"):
            self.state[whitelist_domain] = True

    def process_typo(self, flow: http.HTTPFlow) -> bool:
        # The returned boolean value is used to determine whether to stop further lib

        # assets js file to render react page
        path = flow.request.path_components
        if (
                len(path) == 2
                and path[0] == "assets"
                and path[1].startswith("index")
                and path[1].endswith(".js")
        ):
            flow.response = http.Response.make(
                200,
                requests.get(
                    WEB_URL.removesuffix("/") + "/" + flow.request.path.removeprefix("/")
                ).content,
                headers={
                    "content-type": "application/javascript"
                }
            )
            return True

        whitelisted = self.state.get(flow.request.host_header)

        if whitelisted:
            return False

        corrected = self.generate_suggestion(flow.request.host_header)
        if not corrected:
            return False

        corrected_url = f"{flow.request.scheme}://{corrected}/"

        if (whitelisted is not None) and not whitelisted:
            flow.response = http.Response.make(301, headers=(
                (b"Location", corrected_url.encode()),
            ))
            return True

        query_string = f"block?err=typo" + \
                       f"&corrected_url={corrected_url}" + \
                       f"&corrected_domain={corrected}" + \
                       f"&original_url={flow.request.url}" + \
                       f"&original_domain={flow.request.host_header}"

        if (
                len(path) == 1
                and flow.request.query.get("err") == "typo"
        ):
            flow.response = http.Response.make(200, requests.get(
                WEB_URL.removesuffix("/") + "/" + query_string
            ).content)
            return True

        flow.response = http.Response.make(301, headers={
            "location": f"{flow.request.scheme}://{flow.request.host_header}/{query_string}"
        })
        return True

    def generate_suggestion(self, host) -> str | None:
        host = remove_dots(host)
        suggestions = self.sym_spell.lookup(host, Verbosity.CLOSEST)

        if not suggestions:
            return

        least_edit_distance, final_suggestion = suggestions[0].distance, suggestions[0].term
        for current_suggestion in suggestions[1:]:
            if current_suggestion.distance < least_edit_distance or final_suggestion == host:
                final_suggestion = current_suggestion.term

        if final_suggestion != host:
            return self.dict[final_suggestion]

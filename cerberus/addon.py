import socket
from pathlib import Path

from typo import SpellChecker
from middleware_handler import MiddlewareHandler
from helpers import Router

import geoip2.database
import geoip2.errors
from mitmproxy import http


class Addon(Router):
    def __init__(self):
        self.spellchecker = SpellChecker()
        self.middleware_handler = MiddlewareHandler()

        self.geoip_reader = geoip2.database.Reader(
            (Path(__file__).parent / "geo.mmdb").resolve()
        )

        super().__init__(Router.combine_namespaces([
            self.spellchecker,
            self.middleware_handler,
        ]))

    def requestheaders(self, flow: http.HTTPFlow) -> None:
        path = flow.request.path_components

        # Requests made to the domain "mitm.it" are being (ab)used for internal communication
        if flow.request.host_header == "mitm.it" and path[0] == "cerberus":
            self.route(flow)

    def request(self, flow: http.HTTPFlow) -> None:
        self.perform_checks(flow)

    def perform_checks(self, flow: http.HTTPFlow) -> str:
        # Returns a string describing which check matched the given flow
        if self.geoblock(flow):
            return "geoblocked"
        elif self.spellchecker.process_typo(flow):
            return "typo"

    def geoblock(self, flow: http.HTTPFlow) -> bool:
        try:
            ip = socket.gethostbyname(flow.request.host_header)
            if self.geoip_reader.city(ip).country.iso_code in ("RU", "PK", "CN"):
                flow.response = http.Response.make(
                    403,
                    content=b"<h1>This website is hosted in a country that is blacklisted</h1>"
                )
                return True
        except socket.gaierror:
            return False
        except geoip2.errors.AddressNotFoundError:
            return False


addons = [Addon()]

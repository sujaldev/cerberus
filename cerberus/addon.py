from typo import SpellChecker
from middleware_handler import MiddlewareHandler
from helpers import Router

from mitmproxy import http


class Addon(Router):
    def __init__(self):
        self.spellchecker = SpellChecker()
        self.middleware_handler = MiddlewareHandler()

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

    def perform_checks(self, flow: http.HTTPFlow) -> None:
        if self.spellchecker.process_typo(flow):
            return


addons = [Addon()]

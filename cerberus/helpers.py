import socket
from typing import List

from mitmproxy import http

try:
    docker_host = socket.gethostbyname('host.docker.internal')
    WEB_URL = f"http://{docker_host}:8080/"
    MIDDLEWARE_URL = f"http://{docker_host}:33359/"
except socket.gaierror:
    WEB_URL = "http://localhost:8080/"
    MIDDLEWARE_URL = "http://localhost:33359/"


class Router:
    def __init__(self, route_table: dict):
        self.route_table = route_table

    def route(self, flow: http.HTTPFlow) -> None:
        path = flow.request.path_components[1:]
        self.route_table[path[0]](flow)

    @staticmethod
    def combine_namespaces(routers: List["Router"]) -> dict:
        if not routers:
            return {}

        all_namespaces = routers[0].route_table
        for router in routers[1:]:
            all_namespaces.update(router.route_table)
        return all_namespaces

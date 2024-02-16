from mitmproxy import ctx, http


class Addon:
    @property
    def wg_conf(self) -> bytes:
        # There has to be a better way than this.
        try:
            return f'{ctx.master.addons.get("proxyserver").servers["wireguard"].client_conf() or ""}'.encode()
        except KeyError:
            return b""

    def middleware_recv(self, flow: http.HTTPFlow) -> None:
        # Handles receiving config data from middleware.
        path_components = flow.request.path_components[1:]

        if path_components[0] == "wireguard":
            flow.response = http.Response.make(content=self.wg_conf)

    def request(self, flow: http.HTTPFlow) -> None:
        if flow.request.host_header == "mitm.it" and flow.request.path_components[0] == "cerberus":
            return self.middleware_recv(flow)


addons = [Addon()]

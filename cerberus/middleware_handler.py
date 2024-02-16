from mitmproxy import ctx, http
from helpers import Router


class MiddlewareHandler(Router):
    def __init__(self):
        super().__init__({
            "wireguard": self.wg_conf
        })

    @staticmethod
    def wg_conf(flow: http.HTTPFlow) -> None:
        # There has to be a better way than this.
        try:
            conf = f'{ctx.master.addons.get("proxyserver").servers["wireguard"].client_conf() or ""}'.encode()
        except KeyError:
            conf = b""
        flow.response = http.Response.make(200, content=conf)

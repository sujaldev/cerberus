import textwrap

from mitmproxy import http
from mitmproxy import ctx
from mitmproxy.net.local_ip import get_local_ip, get_local_ip6
from mitmproxy_rs import pubkey


class Addon:
    def __init__(self):
        self.wg_conf = self.get_wireguard_config()

    def get_wireguard_config(self):
        # There has to be a better way than this.
        host = get_local_ip() or get_local_ip6()
        port = ctx.options.listen_port
        wg_server = ctx.master.addons.get("proxyserver").servers["wireguard"]
        return textwrap.dedent(
            f"""
            [Interface]
            PrivateKey = {wg_server.client_key}
            Address = 10.0.0.1/32
            DNS = 10.0.0.53

            [Peer]
            PublicKey = {pubkey(wg_server.server_key)}
            AllowedIPs = 0.0.0.0/0
            Endpoint = {host}:{wg_server.mode.listen_port(port)}
            """
        ).strip()

    def request(self, flow: http.HTTPFlow) -> None:
        print(flow.request)


addons = [Addon()]

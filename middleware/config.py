import requests
import socket

try:
    MITMPROXY = f"http://{socket.gethostbyname('host.docker.internal')}:33380/"
except socket.gaierror:
    MITMPROXY = "http://localhost:33380/"
BASE_URL = "http://mitm.it/cerberus"


class Config:
    def __init__(self):
        self.session = requests.Session()
        self.session.proxies.update({
            "http": MITMPROXY
        })

    @property
    def wg_conf(self):
        return self.session.get(BASE_URL + "/wireguard").content.decode()

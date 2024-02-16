FROM mitmproxy/mitmproxy:latest

WORKDIR /app
COPY . .

CMD ["mitmdump", "-q", "-s", "addon.py", "--mode", "wireguard", "--mode", "regular@33380"]
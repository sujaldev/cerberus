FROM mitmproxy/mitmproxy:latest

RUN apt-get update -y && apt-get upgrade -y && apt-get install g++ -y

WORKDIR /app

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

CMD ["mitmweb", "-q", "-s", "addon.py", "--mode", "wireguard", "--mode", "regular@33380", "--web-port", "33382"]
from config import Config

from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
sio = SocketIO(app, cors_allowed_origins="*", async_mode="eventlet")
config = Config()


@sio.on("init")
def init():
    sio.emit("wg_conf", config.wg_conf)


if __name__ == '__main__':
    sio.run(
        app,
        debug=False,
        host="0.0.0.0",
        port=33359,
        log_output=True,
        use_reloader=False
    )

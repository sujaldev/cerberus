import {io} from "socket.io-client";

const URL = "http://localhost:33359/";

const socket = io(URL);

export default socket;

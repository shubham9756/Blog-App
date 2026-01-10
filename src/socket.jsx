import { io } from "socket.io-client";

const socket = io("https://blog-app-backend-odgo.onrender.com/", {
  withCredentials: true
});

export default socket;

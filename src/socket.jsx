import { io } from "socket.io-client";

const socket = io("https://blog-appbackend.vercel.app/", {
  withCredentials: true
});

export default socket;

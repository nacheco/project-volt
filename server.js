const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev })


const server = require("http").createServer(app);


const cors = require("cors");



const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running.");
});

//Adding Myself
io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  //Notifies When Call Hs Ended
  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });
  //Calling User
  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  //When The Call Has Been Accepted.
  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes");
const dbConnect = require("./db/index");
const server = require("http").Server(app);
const socket = require("./socket");

dotenv.config();
app.use(cors()); //acepta todas las URL
app.use(express.json());
socket.connect(server);
app.use(router);

dbConnect().then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  });
});

module.exports = app;

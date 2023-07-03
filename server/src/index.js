const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes");
const dbConnect = require("./db/index");
const server = http.createServer(app);

dotenv.config();
app.use(cors({
  origin: ["https://the-perfect-mentor-backend.vercel.app/"],
  methods: ["POST", "GET"],
  credentials: true
}
)); //acepta todas las URL
app.use(express.json());
app.use(router);

dbConnect().then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  });
});

module.exports = app;

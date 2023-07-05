const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes");
const dbConnect = require("./db/index");
const server = http.createServer(app);

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(router);

const backendURI = process.env.REACT_APP_BACKEND_URI

dbConnect().then(() => {
  server.listen(backendURI, () => {
    console.log(`Servidor corriendo en el puerto ${backendURI}`);
  });
});

module.exports = app;

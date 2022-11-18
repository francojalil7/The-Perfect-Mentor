const express = require("express");
const cors = require("cors")
const app = express();
const dotenv = require("dotenv");
const router = require("./routes");
const dbConnect = require("./db/index")

dotenv.config();
app.use(cors()); //acepta todas las URL
app.use(express.json());

app.use(router)

dbConnect().then(() =>{
    app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
});
})




module.exports = app; 
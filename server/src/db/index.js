const mongoose = require("mongoose");


const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;

  mongoose.connect(DB_URI,
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("**** Successful connection ****");
      } else {
        console.log("**** Connection error ****");
      }
    }
  );

  

};



module.exports = dbConnect;



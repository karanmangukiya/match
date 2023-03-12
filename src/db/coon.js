const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/data").then(()=>{
    console.log("connection secssesfull....");
}).catch((error)=>{
    console.log(error);
});
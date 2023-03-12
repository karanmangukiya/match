const mongoose = require("mongoose");

const cricatorschema = new mongoose.Schema({
    
    name : {
        type : String ,
        unique :true,
        required : true ,
        trim : true
       
    },

    phone : Number ,

    email : {
        type : String ,
        require : true
    },

    addres : String,
    

    ranking: {
        type : Number ,
        required : true ,
        unique : true
    },
    
    country : {
        type : String ,
        required : true ,
        trim : true 
    },
    score:{
        type : Number ,
        required : true ,
        trim: true
    },
    event: {
        type : String ,
        default:"100m"
    }




});

const Criketor= new mongoose.model("Hiscrik" ,cricatorschema);

module.exports=Criketor;
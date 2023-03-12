const express = require("express");
const app = express();
require("./db/coon");
const Criketor = require("./module/mens");
const port = process.env.PORT || 6000 ;
app.use(express.json());

app.post("/criketor",async(req,res) => {

    try{
    const user = new Criketor(req.body);
    console.log(req.body)
    const kdata = await user.save()
        res.status(201).send(kdata);
    }catch(error){
        res.status(400).send(error)
    }
    


})

app.listen(port , ()=>{
    console.log(`connection is set-upp ${port}`);
})
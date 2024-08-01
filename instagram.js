const express=require("express");
const app=express();
 
const port=8080;
app.listen(port,()=>{
    console.log("app is listening");
})
app.set("view engine","ejs");

app.use(express.static("public/css"));
app.use(express.static("public/js"))

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    let instadata=require("./data.json");
    let data=instadata[username];
    if(!data){
        res.send("not found")
    }
   else{
    res.render("instagramTemplate.ejs",{data})
   }
})
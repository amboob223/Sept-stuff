// first we import the varibles then make the api then we set up where it will listen from 
const express= require("express");
const app= express()

//now we make api
app.get("/api",(req,res)=>{
    res.json({"users":["Abdul","Mboob","Aziz"]})
}) // this get links up with the listen and nodemon in the package json file

app.listen(5000,()=>{console.log("its hard for you")})
//listen
console.log("Enter in the backend world..");

const express = require('express');
const app = express();
require('dotenv').config();
// const PORT = 4000;

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.get('/twitter',(req,res)=>{
    res.send("I am in twitter");
})

app.get('/whatsapp',(req,res)=>{
    res.send("<h1>I am in Whatsapp</h1>")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>I am in Chai or Code</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port`);
})
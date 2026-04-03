//require 套件进来 存到express, const 固定不变
// 直接执行express 然后存到app里面
const express = require("express");
const app = express();
const portNum = 8088;
// (req,res) => {} 是function的一个结构
app.get("/" , (req,res)=>{ 
    res.send("Hello world");
});

app.listen(portNum , () => {
    console.log(`Server is running at localhost:${portNum}`);
    
});
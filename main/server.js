//require 套件进来 存到express, const 固定不变
// 直接执行express 然后存到app里面
const express = require("express");
const app = express();
const portNum = 8088;

// module[2] 引入/router/book.js 程式
const booksRouter = require("./router/book.js");
const aboutRouter = require("./router/about");

// (req,res) => {} 是function的一个结构
// API
app.get("/" , (req,res)=>{ 
    res.send("Hello world");
});

// module[3] 将/books的request 导入到booksRouter处理
// 打/book 都会送到 booksRouter里面来
app.use("/book", booksRouter);
app.use("/about", aboutRouter);

app.listen(portNum , () => {
    console.log(`Server is running at localhost:${portNum}`);
    
});
const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.send("im /books");
});

router.get("/testqq",(req,res) =>{
    let name = req.query.name;
    res.send(`im /about/name , hi ${name}`);
})

module.exports = router;
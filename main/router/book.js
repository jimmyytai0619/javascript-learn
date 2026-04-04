const express = require("express");
const router = express.Router(); 

router.get("/", (req,res) => {
    res.send("im /books");
});

router.get("/page", (req,res) => {
    res.json({ message : "im /book/page route "});
});

// module[1] 等router导出，等别人require引入使用
// router. 是给别人用
module.exports = router;
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    //res.send("ROOT--'/'---router");
    res.render("index");
});

module.exports = router;
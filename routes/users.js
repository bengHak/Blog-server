var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.json({
        msg: "user router",
    });
});

module.exports = router;

const router = require('express').Router();
const { Chat } = require('../../models');

// Chat Page
router.get("/chat", function (req, res){
    res.render("chat",{});
});

module.exports = router;
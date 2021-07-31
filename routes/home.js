const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Home Page EJS",
        intestazione: "Home Page App",
        info : "App creata cone Node.js"
    });
})

module.exports = router;
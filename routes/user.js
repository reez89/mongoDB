const { userAuth, userPerms } = require('../middleware/user-auth');
const express = require('express');
const router = express.Router();

router.use(userAuth, userPerms);

router.get('/risorsa-1', (req, res) => {
    res.send('Ecco a te la risorsa premium...');
});

module.exports = router;
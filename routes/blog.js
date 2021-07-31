const express = require('express');
const router = express.Router();


router.get('/articoli', (req, res) => {
    const articoli = [
        {titolo: "Titolo del testo 1", testo: "Testo articolo 1"},
        {titolo: "Titolo del testo 2", testo: "Testo articolo 2"},
        {titolo: "Titolo del testo 3", testo: "Testo articolo 3"}
    ]
    res.render('articoli',{
        title:"Articoli",
        elencoArticoli: articoli
    });
});
router.get('/articolo/:titolo', (req, res) => {
    res.send('Pagina articolo');
});

module.exports = router;
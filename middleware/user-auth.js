//Controllo autenticazione
function userAuth(req, res, next) {
    const isLogged = true;
    if (!isLogged) return res.status(401).send('Non sei autenticato');
    req.user = { nome: 'Sara', tipo: 'Premium' };
    next();
}

//Controllo autorizzazione
function userPerms(req, res, next) {
    const isAutorizzato = req.user.tipo === 'Premium' ? true : false;
    if (!isAutorizzato) return res.status(403).send('Non sei autorizzato');
    next();
}

module.exports = {
    userAuth,
    userPerms
}
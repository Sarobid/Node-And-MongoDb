var clMod = require("./clients.service");
module.exports = function (app) {
    app.get("/inscription", (req, res,next) => {
        clMod.insertion(req.body.nom, req.body.prenom, res)
            .then(data => {
                res.json(data);
            }).catch(err => {
                res.status(err.status || 400);
                res.send({error: {message: err.message},});
            });
    });
    app.get("/personne",(req,res)=>{
        clMod.getAll()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(err.status || 400);
            res.send({error: {message: err.message},});
        });
    });
    app.get("/update",(req,res)=>{
        clMod.update()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(err.status || 400);
            res.send({error: {message: err.message},});
        });
    });
    app.get("/sleep", (req, res) => {
        res.send({ nom: 'aaaaaaaaaaaaaaa' });
    });
    app.get("/nouveau-genre",(req,res)=>{
        clMod.insertionGenre()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(err.status || 400);
            res.send({error: {message: err.message},});
        });
    });
}
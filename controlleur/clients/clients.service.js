var con = require("./../../db");
const Personne = require('./../../model/clients');
const Sexe = require('./../../model/sexe');

async function insertion(n, p,res) {
    try {
        var sexe = await Sexe.findOne({_id:"65bb6a4bc087486e64312a1c"});   
        var nom = "ANDRIAMASINAVALONA";
        var prenom = "Josephine";
        var pers = new Personne({nom,prenom,sexe});
        var data = await pers.save();
        return data;     
    } catch (error) {
        throw error;
    }
}
exports.insertion = insertion;
async function getAll(){
    try {
        var data = await Personne.find({}).populate("sexe");
        return data;
    } catch (error) {
        throw error;
    }
}
exports.getAll = getAll;
async function update(){
    try {
        var sexe = await Sexe.findOne({_id:"65bb6a0a864c97d220268e88"});   
        var pers = await Personne.findOne({_id:"65bb6dc35ae4bf3fd2dfcb9c"});
        pers['sexe'] = sexe;
        var data = await pers.save();
        return data;     
    } catch (error) {
        throw error;
    }
}
exports.update = update;

async function insertionGenre(){
    var nom = "Femme";
    var sexe = new Sexe({nom});
    try {
        var data = await sexe.save();
        return data;
    } catch (error) {
        throw error;
    }
}
exports.insertionGenre = insertionGenre;
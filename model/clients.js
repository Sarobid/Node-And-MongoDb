const mongoose = require('mongoose');
const { Schema } = mongoose;
const clientsShema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String
        , required: true
    },
    sexe: {
        type: Schema.Types.ObjectId,
        ref: 'sexe',
        required: true
    }
}, { timestamps: true });
const Personne = mongoose.model('Personne', clientsShema);
module.exports = Personne;
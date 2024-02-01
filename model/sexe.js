const mongoose = require('mongoose');
const { Schema } = mongoose;
const sexeSchema = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });
const Sexe = mongoose.model('sexe', sexeSchema);
module.exports = Sexe;
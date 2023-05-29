const mongoose = require("mongoose")
const categorieSchema = mongoose.Schema({
    nameCategorie: String
})


const Categorie = mongoose.model('Categorie', categorieSchema)
module.exports = Categorie
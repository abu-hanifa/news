const Categorie = require("../models/Categorie.model")

module.exports.categorieController = {
    postCategorie: (req, res) => {
        Categorie.create({
            nameCategorie: req.body.nameCategorie
        }).then((data) => {
            res.json(data)
        })
    },
    deleCategorieId: (req, res) => {
        Categorie.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getCategorie: (req, res) => {
        Categorie.find().then((data) => {
            res.json(data)
        })
    },
    
}
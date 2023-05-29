const Coment = require("../models/Coment.model")

module.exports.comentController = {
    postComentNews: (req, res) => {
        Coment.create({
            nameUserComent: req.body.nameUserComent,
            textComent: req.body.textComent,
            comentNews: req.params.id
        }).then((data) => {
            res.json(data)
        })
    },
    deleteComent: (req, res) => {
        Coment.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getComentNews: (req, res) => {
        Coment.find({comentNews: req.params.id}).populate('comentNews').then((data) => {
            res.json(data)
        })
    }
}
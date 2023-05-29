const News = require("../models/News.model")

module.exports.newsController = {
    postNews: (req,res) => {
        News.create({
            header: req.body.header,
            text: req.body.text,
            categorieNews: req.body.categorieNews
        }).then((data) => {
            res.json(data)
        })
    },
    deleteNewsId: (req, res) => {
        News.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })

    },
    patchNewsID: (req, res) => {
        News.findByIdAndUpdate(req.params.id, {name: req.body.name}).then((data) => {
            res.json(data)
        })
    },
    getNewsId: (req, res) => {
        News.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getNews: (req, res) => {
        News.find().then((data) => {
            res.json(data)
        })
    },
    getNewsCategorie: async (req, res) => {
        const data = await News.find({categorieNews: req.params.id}).populate('categorieNews', "-_id -__v")
        res.json(data)
    }
}
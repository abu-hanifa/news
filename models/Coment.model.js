const mongoose = require("mongoose")
const comentSchema = mongoose.Schema({
    nameUserComent: String,
    textComent: String,
    comentNews: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'News'
    }
})


const Coment = mongoose.model('Coment', comentSchema)
module.exports = Coment
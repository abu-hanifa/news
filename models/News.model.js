const mongoose = require("mongoose")
const newsSchema = mongoose.Schema({
    header: String,
    text: String,
    categorieNews: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Categorie'

    }

})


const News = mongoose.model('News', newsSchema)
module.exports = News
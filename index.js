const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000


app.use(express.json())
app.use(require('./routes/news.route'))
app.use(require('./routes/coment.route'))
app.use(require('./routes/categorie.route'))


mongoose.connect("mongodb+srv://abu-hanifa:lom0895311@intocode.qw0fyj8.mongodb.net/news16").then(() => console.log('успешно'))
.catch(() => console.log('ошибка'))



app.listen(port, () => {
    console.log(`сервер http://localhost${port}`);
})
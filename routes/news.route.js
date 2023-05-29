const {Router} = require("express")
const {newsController} = require("../controllers/news.controller")
const router = Router()

router.post('/news', newsController.postNews)
router.delete('/news/:id', newsController.deleteNewsId)
router.patch('/news/:id', newsController.patchNewsID)
router.get('/news/:id', newsController.getNewsId)
router.get('/news', newsController.getNews)
router.get('/newsCategorie/:id', newsController.getNewsCategorie)


module.exports = router
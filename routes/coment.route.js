const {Router} = require("express")
const {comentController} = require("../controllers/coment.controller")
const router = Router()

router.post('/coment/:id', comentController.postComentNews)
router.delete('/coment/:id', comentController.deleteComent)
router.get('/comentNews/:id',comentController.getComentNews)



module.exports = router
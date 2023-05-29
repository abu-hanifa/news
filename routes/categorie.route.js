const {Router} = require("express")
const {categorieController} = require("../controllers/categorie.controller")
const router = Router()

router.post('/categorie', categorieController.postCategorie)
router.delete('/categorie/:id', categorieController.deleCategorieId)



module.exports = router
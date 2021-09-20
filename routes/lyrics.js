const { Router } = require('express')
const controllers = require('../controllers/lyrics')

const router = Router()

router.get('/lyrics', controllers.getLyrics)
router.get('/lyrics/:id', controllers.getLyric)
router.post('/lyrics', controllers.createLyric)
router.put('/lyrics/:id', controllers.updateLyric)
router.delete('/lyrics/:id', controllers.deleteLyric)

module.exports = router

const { Router } = require('express')
const router = Router()

const UsuarioController = require('../controller/UsuarioController')

router.get('/', (request, response) => {
    return response.status(200).send('foi mano!!')
})

router.get('/usuario', UsuarioController.index)
router.get('/usuario/:id', UsuarioController.findById)

module.exports = router
const { Router } = require('express')
const router = Router()

router.get('/', (request, response) => {
    return response.status(200).send('foi mano!!')
})

module.exports = router
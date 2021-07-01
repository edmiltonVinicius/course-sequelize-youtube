import { Router } from 'express'
const router = Router()

router.get('/', (request, response) => {
    return response.status(200).send('foi mano!!')
})

export default router
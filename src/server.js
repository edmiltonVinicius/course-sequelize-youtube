import express from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (request, response) => {
    return response.status(200).send('foi mano!!')
})

app.listen(port, () => console.log('Server running in port ' + port))
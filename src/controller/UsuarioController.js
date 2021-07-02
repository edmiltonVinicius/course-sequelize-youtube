const Usuario = require('../model/Usuario')

async function index(request, response) {
    const usuario = await Usuario.findAll()
    return response.status(200).json(usuario)
}

module.exports = {
    index
}
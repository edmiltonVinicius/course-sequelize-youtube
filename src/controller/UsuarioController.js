const Usuario = require('../model/Usuario')

async function index(request, response) {
    const usuario = await Usuario.findAll()
    return response.status(200).json(usuario)
}

async function findById(request, response) {
    const { id } = request.params

    const usuario = await Usuario.findAll({
        where: {
            id
        }
    })
    return response.status(200).json(usuario)
}

module.exports = {
    index,
    findById
}
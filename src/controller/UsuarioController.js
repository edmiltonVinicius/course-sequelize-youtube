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

async function store(request, response) {
    const { name, password } = request.body

    const usuario = await Usuario.create({
        name,
        password
    })

    return response.status(200).json(usuario)
}

async function deleteUsuario(request, response) {
    const { id } = request.params

    const usuario = await Usuario.destroy({
        where: {
            id
        }
    })
    return response.status(200).json(usuario)
}

module.exports = {
    index,
    findById,
    store,
    deleteUsuario
}
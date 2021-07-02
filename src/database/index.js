const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')
const Usuario = require('../model/Usuario.js')

const connection = new Sequelize(dbConfig)

Usuario.init(connection)

module.exports = connection
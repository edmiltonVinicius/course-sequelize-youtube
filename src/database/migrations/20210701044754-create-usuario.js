'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Cria a tabela 'usuario' é o nome da tabela
        return queryInterface.createTable('usuario', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            }
        })
    },

    down: async (queryInterface, Sequelize) => {

    }
};

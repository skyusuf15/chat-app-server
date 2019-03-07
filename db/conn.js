const Sequelize = require('sequelize');
const conn = new Sequelize(
    "chat-app-db",
    "root",
    "password",
    {
        dialect: 'mysql',
        operatorsAliases: false,
    }
);

module.exports = conn;
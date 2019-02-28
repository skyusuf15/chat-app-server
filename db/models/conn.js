const Sequelize = require('sequelize');
const conn = new Sequelize("chat-app-db", "root", "password", {
    dialect: "mysql"
});

module.exports = conn;
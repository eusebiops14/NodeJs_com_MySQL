const Sequelize = require("sequelize");

const sequelize = new Sequelize('celke' , 'root' , 'Eu04121404@#', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize : Sequelize,
    sequelize: sequelize
}
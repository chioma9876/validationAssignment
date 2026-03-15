const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('validationClassByMrAhmed', 'root', 'chioma2010',{
    //host: 'localhost'
    dialect: 'mysql'
})

module.exports = sequelize
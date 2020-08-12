const Sequelize = require("sequelize")

const sequelize = new Sequelize("just_tech_news_db",process.env.DB_USER,process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize
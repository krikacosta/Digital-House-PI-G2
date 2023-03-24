require('dotenv').config();

//Passando as variáveis de ambiente
module.exports = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT,
  "port": process.env.DB_PORT
}

// const { Sequelize } = require('sequelize');
// const dotenv = require('dotenv/config.js');

// const DB_NAME = process.env.DB_NAME;
// const DB_USER = process.env.DB_USER;
// const DB_HOST = process.env.DB_HOST;
// const DB_PASSWORD = process.env.DB_PASSWORD;

// const sequelize = new Sequelize(DB_NAME, DB_HOST, DB_USER, DB_PASSWORD, {
//   dialect: "mysql",
// });

// export default sequelize;
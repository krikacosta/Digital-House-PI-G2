require('dotenv').config();

module.exports = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT,
  "port": process.env.DB_PORT,
}

// module.exports = {
//   "username": "root",
//   "password": "@@Cb200311",
//   "database": "PETCIA1",
//   "host": "127.0.0.1",
//   "dialect": "mysql",
//   "port": "3306"
// }
const createPool = require('mysql2/promise')

module.exports = createPool.createPool({
  port: "3306",
  user: "root",
  password: "12345",
  database: "Ejemplo",
});

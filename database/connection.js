const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'admin',
  database: 'schedule-petropolis'
});

module.exports = connection;
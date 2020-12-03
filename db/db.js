var mysql = require('mysql')

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'mypass',
  database: 'mooc'
})
conn.connect()
module.exports = conn;

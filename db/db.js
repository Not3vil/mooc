var mysql = require('mysql')
var fs= require('fs')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'mypass',
  database: 'mooc',
  multipleStatements: true
})
connection.connect()

fs.readFile('./cre_db.sql', 'utf-8', function(err, data) {
  if (err) {
    return data;
  }
  connection.query(data,function(err,results,fields) {
    if (err) {
      console.log("db_crate ", err)
    }
    consol.log(results)
  });
});

module.exports = connection;

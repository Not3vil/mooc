var mysql = require('mysql')
var fs= require('fs')

function once(fn, context) { 
    var result;
    return function() { 
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = context = null;
        }
        return result;
    };
}

function db_create () {
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
    return err;
  }
  connection.query(data,function(err,results,fields) {
    if (err) {
      console.log("db_crate ", err)
    }
    consol.log(results)
  });
});
 connection.end();
};

once(db_create())

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'mypass',
  database: 'mooc'
})
conn.connect()
module.exports = conn;

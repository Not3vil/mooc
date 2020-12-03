var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'mypass',
  database: 'mooc'
})
connection.connect()

fs.readFile(path.join(__dirname, 'db/cre_db.sql'), 'utf-8', function(err, data) {
  if (err) {
    return data;
  }
  console.log(data)
});

export.conn = connection;

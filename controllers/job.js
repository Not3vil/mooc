var sql= require('../db/db.js');

module.exports.joblist = (req, res) => {
  sql.query("SELECT * FROM job", (err, resQuery) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
  });
    
  res.render(resQuery);
    
}

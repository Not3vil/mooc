var sql = require('../db/db.js')

module.exports.injest = (req, res, nxt) => {
    sql.query("ÏNSERT INTO inven SET ?",)
  res.send("Not implemented")
};  

module.exports.outjest = function outjest (req, res) {
  res.send("Not implemented")
};  

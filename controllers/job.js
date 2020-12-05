var sql= require('../db/db.js');

module.exports.joblist = (req, res) => {
<<<<<<< HEAD
  sql.query("SELECT * FROM job", (err, resQuery) => {
=======
  sql.query("SELECT * FROM customers", (err, resQuery) => {
>>>>>>> d13bb8baf0da4b1638e59be19cf04d55b762caf7
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
<<<<<<< HEAD
  });
    
  res.render(resQuery);
    
}
=======
    
  res.render(resQuery);
    
};
>>>>>>> d13bb8baf0da4b1638e59be19cf04d55b762caf7

var sql = require('../db/db')

module.exports.injest = (req, res, nxt) => {
    if (!req.body) {
        res.stattus(400).send({
            message: "Content can not be empty"
        });
    }

    sql.query("ÏNSERT INTO inven SET ?",{
        UUID: req.body.uuid,
        itemid: req.body.itemid,
        weight: req.body.weight,
        units: req.body.units,
        recv: req.body.recv,
        pos: req.body.pos

    }, (err, querRes) => {
        if (err) {
            console.log("eror in db:",err);
            result(err,NULL);
            return;
        }
    });
  res.status(200).send({
      message: "OK"
  });
};  

module.exports.outjest = (req, res, nxt) => {
    if (!req.body) {
        res.stattus(400).send({
            message: "Content can not be empty"
        });
    }

    sql.query("SELECT * FROM inven WHERE UUID UUID = ?",{
        UUID: req.body.UUID
    }, (err, querRes) => {
        if (err) {
            console.log("eror in db:",err);
            result(err,NULL);
            return;
        }
    });
  res.status(200).send(querRes);
};  

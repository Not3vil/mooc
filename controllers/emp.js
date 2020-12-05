var sql = require('../db/db');

module.export.newAdd = (req, res) => {
    if (!req.body) {
        res.stattus(400).send({
            message: "Content can not be empty"
        });
    }

    sql.query("INSERT INTO emp SET ? ", {
        eid: req.body.eid,
        user: req.body.user,
        pass: req.body.pass
    }, (err ,resQuer) => {
        if (err) {
            console.log("eror in db:",err);
            result(err,NULL);
            return;
        }
    });
    res.stattus(200).send({
        message: "OK"
    })
}

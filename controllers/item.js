var sql = require('../db/db');

module.export.itmeAdd = (req, res) => {
    if (!req.body) {
        res.stattus(400).send({
            message: "Content can not be empty"
        });
    }

    sql.query("INSERT INTO item SET ? ", {
        itemid: req.body.itemid,
        profit: req.body.profit,
        moa:  req.body.moa,
        weekend: req.body.weeke,
        season: req.body.season,
        stc: req.body.stc
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

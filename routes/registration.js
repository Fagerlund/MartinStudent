var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */
router.post('/', function (req, res) {
    console.log(req.body);
    var firstname = req.body.firstname;
    var surname = req.body.surname;
    var number = req.body.number;
    var status = req.body.status;
    var str = firstname + ',' + surname + ',' + number + ',' + status+','+(new Date()).getTime()+'\n';
    res.send('okidoki');
    fs.appendFile('registration.txt', str, function (err) {
        if (err)
            console.log(err)
        else
            console.log('added "'+str+'" to registration.txt');
    });
});

module.exports = router;
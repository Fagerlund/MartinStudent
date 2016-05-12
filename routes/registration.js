var UAParser = require('ua-parser-js');
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.post('/', function (req, res) {
    console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.surname;
    var number = req.body.number;
    var status = req.body.status;

    var browser = '';
    try {
        var ua = req.headers['user-agent'];
        var parser = new UAParser();
        browser = JSON.stringify(parser.setUA(ua).getBrowser());
    } catch (ex) { }

    var str = firstname + '\t' + lastname + '\t' + number + '\t' + status + '\t' + (new Date()).getTime() + '\t' + browser + '\n';
    fs.appendFile('registration.txt', str, function (err) {
        if (err)
            console.log(err)
        else
            console.log('added "' + str + '" to registration.txt');

        res.cookie('status', status);
        res.cookie('firstname', firstname);
        res.cookie('lastname', lastname);
        res.send('okidoki');
    });
});

module.exports = router;
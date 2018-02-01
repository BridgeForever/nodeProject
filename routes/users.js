var express = require('express');
var router = express.Router();
var URL = require('url');
var User = require('./user.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/getUserInfo', function(req, res, next) {
    var user = new User();
    var params = URL.parse(req.url, true).query;
    if (params.id == '1') {
        user.name = 'ligh';
        user.age = '1';
        user.ciry = '北京';
    } else {
        user.name = 'sping';
        user.age = '2';
        user.city = '重庆';
    }
    var response = { status: 1, data: user };
    res.send(JSON.stringify(response));
})
module.exports = router;
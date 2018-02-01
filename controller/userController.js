var express = require('express');
var router = express.Router();
var URL = require('url');
var UserService = require('../service/userService.js');
var User = require('../entity/user.js');
var userService = new UserService();
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/addUser', function(req, res, next) {
    var params = URL.parse(req.url, true).query;
    userService.addUser(params, function(result) {
        // var response = res.json(result);
        res.send(JSON.stringify(result));
    });


});
router.get('/getUser', function(req, res, next) {
    var params = URL.parse(req.url, true).query;
    userService.getUser(params, function(result) {
        // var response = res.json(result);
        res.send(JSON.stringify(result));
    });
});
router.get('/updateUser', function(req, res, next) {
    var params = URL.parse(req.url, true).query;
    userService.updateUser(params, function(result) {
        res.send(JSON.stringify(result));
    })
});
router.get('/deleteUser', function(req, res, next) {
    var params = URL.parse(req.url, true).query;
    userService.deleteUser(params, function(result) {
        res.send(JSON.stringify(result));
    })
})
module.exports = router;
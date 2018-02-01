var Db = require("../common/db.js");
var User = require("../entity/user.js");
var mysql = require("mysql");
var UUID = require('uuid');

function UserDao() {
    // 向前台返回JSON方法的简单封装
    this.jsonWrite = function(res, ret) {
        if (typeof ret === "undefined") {
            res.json({
                code: "1",
                msg: "操作失败"
            });
        } else {
            res.json(ret);
        }
    };
    this.addUser = function(params, callback) {
        var sql = "INSERT INTO user(id,username,password) VALUES(?,?,?)";
        var addsqlparams = [UUID.v1(), params.username, params.password];
        var db = new Db();
        var connection = db.connection;
        connection.connect(function(err) {
            if (err) {
                console.log("数据库连接失败" + err);
                return;
            }
        });
        connection.query(sql, addsqlparams, function(err, result) {
            // if (err) {
            //     console.log("添加用户失败" + err);
            //     return;
            // }
            // if (result) {
            //     console.log(".....新增成功.......");
            //     console.log(result);
            //     console.log(".....新增结束......");
            //     result = {
            //         code: "200",
            //         msg: "添加用户成功"
            //     };
            //     callback(result);
            // }
            callback(err, result);
        });
        connection.end();
    };
    this.updateUser = function(params, callback) {
        var sql = "UPDATE user SET username=?,password=? WHERE id=?";
        var db = new Db();
        var connection = db.connection;
        connection.connect(function(err) {
            if (err) {
                console.log("数据库连接失败" + err);
                return;
            }
        });
        var addsqlparams = [params.username, params.password, '3333'];
        connection.query(sql, addsqlparams, function(err, result) {
            console.log('用户' + result)
            callback(err, result);
        });
        connection.end();
    };
    this.deleteUser = function(params, callback) {
        var sql = "DELETE FROM user WHERE id=?";
        var db = new Db();
        var connection = db.connection;
        connection.connect(function(err) {
            if (err) {
                console.log("数据库连接失败" + err);
                return;
            }
        });
        connection.query(sql, params.id, function(err, result) {
            console.log('用户' + result)
            callback(err, result);
        });
        connection.end();
    };
    this.findUser = function(params, callback) {
        var sql = "SELECT * FROM  user WHERE username=?";
        var db = new Db();
        var connection = db.connection;
        connection.connect(function(err) {
            if (err) {
                console.log("数据库连接失败" + err);
                return;
            }
        });
        connection.query(sql, params.username, function(err, result) {
            console.log('用户' + result)
            callback(err, result);
        });
        connection.end();
    };
}
module.exports = UserDao;
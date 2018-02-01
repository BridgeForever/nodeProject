var UserDao = require('../dao/userDao.js');

function UserService() {
    var userDao = new UserDao();
    this.addUser = function(params, callback) {

        userDao.addUser(params, function(err, result) {
            if (err) {
                console.log("添加用户失败" + err);
                return;
            }
            if (result) {
                console.log(".....新增成功.......");
                console.log(result);
                console.log(".....新增结束......");
                result = {
                    code: "200",
                    msg: "添加用户成功"
                };
                callback(result);
            }
        });

    };
    this.getUser = function(params, callback) {
        userDao.findUser(params, function(err, result) {
            if (err) {
                console.log("查找用户失败" + err);
                return;
            }
            if (result) {
                result = {
                    code: "200",
                    data: result
                }
                callback(result);
            }
        })
    };
    this.updateUser = function(params, callback) {
        userDao.updateUser(params, function(err, result) {
            if (err) {
                console.log("修改用户信息失败" + err);
                return;
            }
            if (result) {
                result = {
                    code: "200",
                    data: result
                }
            }
        })
    };
    this.deleteUser = function(params, callback) {
        userDao.deleteUser(params, function(err, result) {
            if (err) {
                console.log("删除用户失败" + err);
                return;
            }
            if (result) {
                result = {
                    code: "200",
                    msg: "删除数据成功"
                }
            }
        })
    }

}
module.exports = UserService;
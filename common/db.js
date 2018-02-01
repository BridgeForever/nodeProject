var mysql = require('mysql');

function Db() {
    this.connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'question_system',
        port: 3306
    })
}

module.exports = Db;
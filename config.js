const mysql = require("mysql2");
const config = mysql.createPool({
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DBNAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    },
    email: {
        username: "<email>",
        password: "<parola>",
        from: "<from_email>",
    }
})

module.exports = config.promise();
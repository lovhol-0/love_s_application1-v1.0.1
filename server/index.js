const express = require('express')
const multer = require('multer');
const cors = require('cors')

const app = express();

const SELECT_ALL_CUSTOMER_QUERY = 'SELECT * FROM Customer';

// mySql
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost:3308',
    user : 'root',
    password : 'root',
    database : 'BotniaDB'
});

connection.connect(err => {
    if(err) {
        return err;
    }
    });

app.use(cors());

app.get('/customer', (req, res) => {
    connection.query(SELECT_ALL_CUSTOMER_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
})



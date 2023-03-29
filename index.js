const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    user: "root",
    port: 3306,
    host: 'localhost',
    password: 'password',
    database: 'fakeDatabase'
})

app.post('/insert', (req, res) => {

    const countryName = "Mexico";
    const population = 160000000;

    db.query(
        'INSERT INTO countries (countryName, population) VALUES (?, ?)', [countryName, population],
        (err, result) => {
            if (err) {
                console.log(err)
            }

            res.send(result)
        }
    );
});

app.get('/select', (req, res) => {

    db.query(
        'SELECT * FROM countries',
        (err, result) => {
            if (err) {
                console.log(err)
            }

            res.send(result)
        }
    );
})

app.listen(3001, console.log("Server Running"))


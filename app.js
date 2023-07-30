const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host    : '172.20.10.8',
    user    : 'root',
    password: '1234',
    database: 'study_folder'
});


app.get('/', (req, res) => {
    res.send('root');
});

app.get('/board', (req,res) => {
    connection.query('select * from board', (error,rows,fields) => {
        if (error) throw error;
        console.log('User info is: ',rows);
        res.send(rows);
})
});

connection.connect();


app.listen(port, () => {
    console.log('서버 실행됨. https://localhost:${port}');
});
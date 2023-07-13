const express = require('express');
const autoHelmApp = express()
const APP_PORT = 8800;  //Sample port of current mock dev stages

// const mysql = require('mysql')
// const dotenv = require('dotenv').config()
// const mysqlConnection = require('express-mysqlConnection')

//DB settings stored in env file
// const dbSettings = mysql.createConnection({
//     host: process.env.host,
//     user: process.env.root,
//     password: process.env.password,
//     database: process.env.database
// })

// dbSettings.connect();
// autoHelmApp.use(mysqlConnection(mysql, dbSettings, 'single'))
autoHelmApp.use(express.json())

autoHelmApp.listen(
    APP_PORT,
    () => {
        console.log("Started!")
    }
)

autoHelmApp.get('/serverUpTest', (request, response) => {
    response.status(200).send({
        test: 'Running!'
    })
});

//GET Request
// autoHelmApp.get('/workflowList', (request, response) => {
//     selectDBQuery = "SELECT * FROM WORKFLOW_DB"
//     dbSettings.query(selectDBQuery, (error, result) => {
//         //Recieve JSON formatted result from query
//     })
// });
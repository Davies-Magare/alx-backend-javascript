const express = require('express');
const StudentsController = require('../controllers/StudentsController.js');
const AppController = require('../controllers/AppController.js');
const app = express();
const port = 1245;

app.get('/', AppController.getHomePage);
app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = app;

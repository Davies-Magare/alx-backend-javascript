const express = require('express');
const fs = require('fs');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let result = '';
  try {
    let path = process.argv[2] || 'database.csv';
    const data = fs.readFileSync(path, 'utf8');
    const parsedData = data.split('\n').filter((row) => row.trim());
    const withoutField = parsedData.slice(1);
    const courses = {};
    let totalStudents = 0;
    withoutField.forEach((element) => {
      const fieldArray = element.split(',');
      const last = fieldArray[fieldArray.length - 1];
      if (!courses[last]) {
        courses[last] = [];
      }
      courses[last].push(fieldArray[0]);
      totalStudents += 1;
    });
    result += `Number of students: ${totalStudents}`;
    Object.keys(courses).forEach((key) => {
      result += `\nNumber of students in ${key}: ${courses[key].length}. List: ${courses[key].join(', ')}`;
    });
    res.send(result);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
});
app.listen(1245);

module.exports = app;


const fs = require('fs');

const countStudents = function readFile(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const parsedData = data.split('\n').filter((row) => row.trim());
    const withoutField = parsedData.slice(1);
    const courses = {};
    withoutField.slice().forEach((element) => {
      const fieldArray = element.split(',');
      const course = fieldArray.pop();
      courses[course] = [];
    });
    let totalStudents = 0;
    withoutField.slice().forEach((element) => {
      const fieldArray = element.split(',');
      courses[fieldArray.pop()].push(fieldArray[0]);
      totalStudents += 1;
    });
    console.log(`Number of students: ${totalStudents}`);
    Object.keys(courses).forEach((key) => {
      console.log(`Number of students in ${key}: ${courses[key].length}. List: ${courses[key].join(', ')}`);
    });
  });
};
module.exports = countStudents;

const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }

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

      console.log(`Number of students: ${totalStudents}`);
      Object.keys(courses).forEach((key) => {
        console.log(
          `Number of students in ${key}: ${courses[key].length}. List: ${courses[key].join(', ')}`,
        );
      });

      resolve();
    });
  });
}

module.exports = countStudents;

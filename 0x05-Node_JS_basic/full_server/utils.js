const fs = require('fs');

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }

      const parsedData = data.split('\n').filter((row) => row.trim());
      const withoutField = parsedData.slice(1);
      const courses = {};

      withoutField.forEach((element) => {
        const fieldArray = element.split(',');
        const last = fieldArray[fieldArray.length - 1];
        if (!courses[last]) {
          courses[last] = [];
        }
        courses[last].push(fieldArray[0]);
      });

      resolve(courses);
    });
  });
}

module.exports = readDatabase;

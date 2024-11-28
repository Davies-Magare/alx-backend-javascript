const http = require('http');
const fs = require('fs');

function countStudents(path) {
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

      const result = {
        totalStudents,
        courses,
      };
      resolve(result);
    });
  });
}

const app2 = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const url = req.url;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    try {
      const path = process.argv[2] || 'database.csv';
      const result = await countStudents(path);

      let response = `Number of students: ${result.totalStudents}`;
      Object.keys(result.courses).forEach((key) => {
        response += `\nNumber of students in ${key}: ${result.courses[key].length}. List: ${result.courses[key].join(', ')}`;
      });

      res.write(response);
    } catch (error) {
      res.write('Cannot load the database');
    }
    res.end();
  }
}).listen(1245);

module.exports = app2;


const http = require('http');
const fs = require('fs');

const app2 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    try {
      const path = process.argv[2] || 'database.csv';
      const data = fs.readFileSync(path, 'utf8'); // Read the file synchronously
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

      // Build the response string
      let responseText = `Number of students: ${totalStudents}\n`;
      Object.keys(courses).forEach((key) => {
        responseText += `Number of students in ${key}: ${courses[key].length}. List: ${courses[key].join(', ')}\n`;
      });

      // Write the result to the response
      res.write(responseText);
    } catch (error) {
      res.write('Cannot load the database');
    }
    res.end();
  }
}).listen(1245);

module.exports = app2;

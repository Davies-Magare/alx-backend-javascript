const http = require('http');
const fs = require('fs');

const app2 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    try {
      const path = process.argv[2] || 'database.csv';
      const data = fs.readFileSync(path, 'utf8'); // Synchronous file read
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

      // Create the response without trailing newlines
      let response = `Number of students: ${totalStudents}`;
      Object.keys(courses).forEach((key) => {
        // Only add a newline if it's not the last course in the list
        response += `\nNumber of students in ${key}: ${courses[key].length}. List: ${courses[key].join(', ')}`;
      });

      res.write(response); // Send the response without an extra newline
    } catch (error) {
      res.write('Cannot load the database');
    }
    res.end();
  }
}).listen(1245);

module.exports = app2;

const readDatabase = require('../utils.js');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const path = req.query.filename || 'database.csv';
      const students = await readDatabase(path);
      let result = 'This is the list of our students\n';

      const sorter = function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      };

      Object.keys(students)
        .sort(sorter)
        .forEach((key) => {
          result += `Number of students in ${key}: ${students[key].length}. `;
          result += `List: ${students[key].join(', ')}\n`;
        });

      res.status(200).send(result.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const path = req.query.filename || 'database.csv';
      const students = await readDatabase(path);
      let course = req.url.split('/').pop();

      if (course !== 'CS' && course !== 'SWE') {
        return res.status(500).send('Major parameter must be CS or SWE');
      }

      res.status(200).send(`List: ${students[course].join(', ')}`);
    } catch {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;


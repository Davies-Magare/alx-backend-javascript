const fs = require('fs');

const countStudents = (path) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Cannot load the database');
      return;
    }

    const rows = data.split('\n').filter(row => row.trim());
    const students = rows.slice(1); // Exclude headers

    const cs = students.filter(student => student.includes('CS'));
    const swe = students.filter(student => student.includes('SWE'));

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${getNames(cs)}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${getNames(swe)}`);
  });
};

const getNames = (students) => {
  // Map through students, extract the name, and then join with ', ', skipping the trailing comma
  return students.map(student => student.split(',')[0]).join(', ');
};

module.exports = countStudents;


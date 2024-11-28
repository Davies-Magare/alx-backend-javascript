const fs = require('fs');

function countStudents(path) {
  try {
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

    console.log(`Number of students: ${totalStudents}`);
    Object.keys(courses).forEach((key) => {
      console.log(
        `Number of students in ${key}: ${courses[key].length}. List: ${courses[key].join(', ')}`,
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

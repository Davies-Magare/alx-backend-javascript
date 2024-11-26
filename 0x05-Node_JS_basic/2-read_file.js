const fs = require('fs');

const countStudents = function readFile(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const parsedData = data.split('\n').filter((row) => row.length);
    const withoutField = parsedData.slice(1);
    const cs = [];
    const swe = [];
    withoutField.forEach((student) => {
      if (student.includes('CS')) {
        cs.push(student);
      } else {
        swe.push(student);
      }
    });
    console.log(`Number of students: ${cs.length + swe.length}`);
    function printer(list) {
      let retStr = '';
      for (let i = 0; i < list.length; i += 1) {
        const name = list[i].split(',')[0];
        if (i < list.length - 1) {
          retStr += `${name}, `;
        } else {
          retStr += `${name}`;
        }
      }
      return retStr;
    }
    console.log(`Number of students in CS: ${cs.length}. List: ${printer(cs)}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${printer(swe)}`);
  });
};
module.exports = countStudents;

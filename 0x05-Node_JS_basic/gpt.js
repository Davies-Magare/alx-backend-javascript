const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into lines (rows)
    const lines = data.split('\n');
    
    // Initialize the fields object to store students by field
    const fields = {};
    let totalStudents = 0;

    // Loop through each line (excluding header and empty lines)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === '') continue; // Skip empty lines
      
      // Split the line into columns (firstname, lastname, age, field)
      const [firstname, lastname, age, field] = line.split(',');

      // Skip if the line doesn't have enough data
      if (!firstname || !lastname || !age || !field) continue;

      // Count total students
      totalStudents++;

      // Add student to the respective field group
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their first names
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    // Handle the case where the file cannot be read
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;


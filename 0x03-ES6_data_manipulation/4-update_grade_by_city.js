export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const gradedList = studentList.filter((student) => student.location === city)
    .map((student) => {
      const studentCopy = { ...student };
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (studentGrade) {
        studentCopy.grade = studentGrade.grade;
      } else {
        studentCopy.grade = 'N/A';
      }
      return studentCopy;
    });
  return gradedList;
}

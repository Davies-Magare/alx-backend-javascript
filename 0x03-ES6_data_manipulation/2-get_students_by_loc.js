export default function getStudentsByLocation(studentList, city) {
  if (studentList instanceof Array) return studentList.filter((x) => x.location === city);
  return [];
}

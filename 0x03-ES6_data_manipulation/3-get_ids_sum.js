export default function getStudentIdsSum(studentList) {
  const initialValue = 0;
  const sumId = studentList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, initialValue,
  );
  return sumId;
}

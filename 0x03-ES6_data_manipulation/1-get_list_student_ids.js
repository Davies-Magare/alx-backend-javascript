export default function getListStudentIds(array) {
  if (array instanceof Array) return array.map((x) => x.id);
  return [];
}

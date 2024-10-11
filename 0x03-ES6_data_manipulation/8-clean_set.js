export default function cleanSet(set, startString) {
  let resultString = '';
  set.forEach((value) => {
    if (value.startsWith(startString) && startString) {
      resultString += `${value.substring(startString.length)}-`;
    }
  });
  return resultString.substring(0, resultString.length - 1);
}

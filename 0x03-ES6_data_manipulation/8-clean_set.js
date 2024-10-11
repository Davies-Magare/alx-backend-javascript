export default function cleanSet(set, startString) {
  let resultString = '';
  const setArray = Array.from(set);
  for (let i = 0; i < setArray.length; i += 1) {
    if (startString && typeof setArray[i] === 'string' && setArray[i].startsWith(startString)) resultString += `${setArray[i].substring(startString.length)}-`;
  }
  return resultString.substring(0, resultString.length - 1);
}

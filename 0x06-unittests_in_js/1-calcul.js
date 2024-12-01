calculateNumber = function(type, a, b) {
  rndA = Math.round(a);
  rndB = Math.round(b);
  if (type === 'SUM') {
    return rndA + rndB;
  }
  else if(type === 'SUBTRACT') {
    return rndA - rndB;
  }
  else if (type === 'DIVIDE') {
    return rndA / rndB;
  }
}
module.exports = calculateNumber;

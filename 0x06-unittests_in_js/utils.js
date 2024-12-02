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
    if (rndB === 0) {
      return('error');
    }
    return rndA / rndB;
  }
}
const Utils = {
  calculateNumber
};
module.exports = Utils;

Utils = require('./utils.js');
sendPaymentRequestToApi = function(totalAmount, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}
module.exports = sendPaymentRequestToApi;

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const apiReq = require('./3-payment.js');

describe('test calculateNumber function', () => {
  it('tests calculateNumber function', () => {
    const calcSpy = sinon.spy(Utils, 'calculateNumber');
    const result = apiReq(100, 20);
    expect(calcSpy.calledWith('SUM', 100, 20)).to.be.true;
    calcSpy.restore();
  });
  it('tests sendPaymentRequestToApi', () => {
    const loggerSpy = sinon.spy(console, 'log');
    apiReq(100, 20);
    // console.log(loggerSpy.args);
    expect(loggerSpy.calledWith('The total is: 120')).to.be.true;
  });
});


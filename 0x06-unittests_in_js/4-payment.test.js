const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const apiReq = require('./4-payment.js');

describe('test calculateNumber function', () => {
  it('tests calculateNumber function', () => {
    const calcStub = sinon.stub(Utils, 'calculateNumber');
    calcStub.returns(10);
    apiReq(100, 20);
    expect(calcStub.calledWith('SUM', 100, 20)).to.be.true;
    calcStub.restore();
  });
  it('tests sendPaymentRequestToApi', () => {
    const calcStub = sinon.stub(Utils, 'calculateNumber');
    calcStub.returns(10);
    const loggerSpy = sinon.spy(console, 'log');
    apiReq(100, 20);
    // console.log(loggerSpy.args);
    expect(loggerSpy.calledWith('The total is: 10')).to.be.true;
  });
});


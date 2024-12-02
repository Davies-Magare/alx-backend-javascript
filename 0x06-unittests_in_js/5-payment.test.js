const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const apiReq = require('./4-payment.js');

describe('test calculateNumber function', () => {
  let loggerSpy;
  beforeEach(() => {
    loggerSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    loggerSpy.restore();
  });
  it('tests console.log', () => {
    apiReq(100, 20);
    expect(loggerSpy.calledWith('The total is: 120')).to.be.true;
    expect(loggerSpy.calledOnce).to.be.true;
  });
  it('tests console.log', () => {
    apiReq(10, 10);
    expect(loggerSpy.calledWith('The total is: 20')).to.be.true;
    expect(loggerSpy.calledOnce).to.be.true;
    // console.log(loggerSpy.args);
  });
});


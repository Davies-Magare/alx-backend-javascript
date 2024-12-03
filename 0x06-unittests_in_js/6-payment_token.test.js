const { expect } = require('chai');
const sinon = require('sinon');
const getToken = require('./6-payment_token.js');

describe('test getPaymentTokenFromAPI', () => {
  it(`resolves with {data: 'Successful response from the API'}`, (done) => {
    getToken(true).then((result) => {
      expect(result).to.deep.equal({data: 'Successful response from the API'});
      done();
    }).catch((error) => {
      done(error);
    });
  });
});


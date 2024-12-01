const assert = require('assert');
const add = require("./0-calcul.js");
describe('test adding function', function() {
  it('tests adding two floats', () => {
    result = add(1.2, 1.2);
    assert.equal(result, 2);
  });
  it('test adding two numbers', () => {
    result = add(2, 2);
    assert.equal(result, 4);
  });
  it('test adding two floats rounding off to the upper limit', () => {
    result = add(5.5, 5.5);
    assert.equal(result, 12);
  });
  it('test adding two floats with different limits', () => {
    result = add(2.1, 2.9);
    assert.equal(result, 5);
  });
});

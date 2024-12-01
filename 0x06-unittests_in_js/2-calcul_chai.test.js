const { expect } = require('chai');
const calc = require("./2-calcul_chai.js");

describe('test the calc function-SUM', function() {
  describe('test adding function', function() {
    it('tests adding two floats', () => {
      result = calc('SUM',1.2, 1.2);
      expect(result).to.equal(2);
    });
    it('test adding two numbers', () => {
      result = calc('SUM', 2, 2);
      expect(result).to.equal(4);
    });
    it('test adding two floats rounding off to the upper limit', () => {
      result = calc('SUM', 5.5, 5.5);
      expect(result).to.equal(12);
    });
    it('test adding two floats with different limits', () => {
      result = calc('SUM', 2.1, 2.9);
      expect(result).to.equal(5);
    });
  });
  
  describe('test calc function-SUBTRACT', function() {
    it('tests subtracting two floats', () => {
      result = calc('SUBTRACT', 3.2, 1.2);
      expect(result).to.equal(2);
    });
    it('test subtracting two numbers', () => {
      result = calc('SUBTRACT', 2, 2);
      expect(result).to.equal(0);
    });
    it('test subtracting two floats rounding off to the upper limit', () => {
      result = calc('SUBTRACT', 5.5, 5.5);
      expect(result).to.equal(0);
    });
    it('test subtracting two floats with different limits', () => {
      result = calc('SUBTRACT', 2.9, 2.1);
      expect(result).to.equal(1);
    });
  });
  
  
  describe('test calc function-DIVIDE', function() {
    it('tests dividing two floats', () => {
      result = calc('DIVIDE', 3.2, 1.2);
      expect(result).to.equal(3);
    });
    it('test dividing two numbers', () => {
      result = calc('DIVIDE', 2, 2);
      expect(result).to.equal(1);
    });
    it('test dividing two floats rounding off to the upper limit', () => {
      result = calc('DIVIDE', 5.5, 5.5);
      expect(result).to.equal(1);
    });
    it('test dividing two floats with different limits', () => {
      result = calc('DIVIDE', 2.9, 2.1);
      expect(result).to.equal(1.5);
    });
    it('test dividing a float and a zero', () => {
      result = calc('DIVIDE', 2.9, 0.1);
      expect(result).to.equal('error');
    });
    
    it('test dividing float with a zero', () => {
      result = calc('DIVIDE', 2.9, 0);
      expect(result).to.equal('error');
    });
  });
});

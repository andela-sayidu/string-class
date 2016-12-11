'use strict'

const expect = require('chai').expect;
require('../src/string');

describe('hasVowels', () => {
  it('returns true if the string contains vowels', () => {
    const word = 'vowels';
    const falseWord = 'gypsy';
    expect(word.hasVowels()).to.be.true;
    expect(falseWord.hasVowels()).to.not.be.true;
  });
});
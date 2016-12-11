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

describe('toUpper', () => {
  it('returns true if the string is returned in Uppercase', () => {
    const word = 'uppercase';
    expect(word.toUpperCase()).to.equal('UPPERCASE');
  });
});
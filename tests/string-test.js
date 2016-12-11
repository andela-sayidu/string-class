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
  it('returns a string is returned in Uppercase', () => {
    const word = 'uppercase';
    expect(word.toUpper()).to.equal('UPPERCASE');
  });
});

describe('toLower', () => {
  it('returns a string is returned in lowercase', () => {
    const word = 'LOWERCASE';
    expect(word.toLower()).to.equal('lowercase');
  });
});

describe('ucFirst', () => {
  it('returns the first character in Uppercase', () => {
    const word = 'first';
    expect(word.ucFirst()).to.equal('First');
  });
});
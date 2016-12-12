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

describe('isQuestion', () => {
  it('verifies if a string is a question', () => {
    const word = 'first';
    const question = 'My name is what?';
    expect(word.isQuestion()).to.not.be.true;
    expect(question.isQuestion()).to.be.true;
  });
});


describe('words', () => {
  it('returns a list of the words in the string', () => {
    const wordArray = 'first of all';
    expect(wordArray.words()).to.deep.equal(['first', 'of', 'all']);
  });
});

describe('wordCount', () => {
  it('returns the number of words in the string', () => {
    const words = 'first of all';
    expect(words.wordCount()).to.equal(3);
  });
});

describe('toCurrency', () => {
  it('returns a currency representation of the String', () => {
    const curr = '1000000';
    expect(curr.toCurrency()).to.equal('1,000,000');
  });
});


describe('fromCurrency', () => {
  it('Returns a number representation of the Currency', () => {
    const curr = '1,000,000';
    expect(curr.fromCurrency()).to.equal(1000000);
  });
});

describe('inverseCase', () => {
  it('Returns each letter in the string as an inverse of its current case', () => {
    const inverse = 'tEST tHE iNVERSE cASE fUNCTION';
    expect(inverse.inverseCase()).to.equal('Test The Inverse Case Function');
  });
});

describe('alternatingCase', () => {
  it('Returns the letters in alternating cases.', () => {
    const alternateChars = 'Alternating';
    const alternateChars1 = 'inverse DNA';
    expect(alternateChars.alternatingCase()).to.equal('aLtErNaTiNg');
    expect(alternateChars1.alternatingCase()).to.equal('iNvErSe DnA');
  });
});


describe('getMiddle', () => {
  it(' Returns the character(s) in the middle of the string', () => {
    const read1 = 'middle';
    const read2 = 'reads';
    expect(read1.getMiddle()).to.equal('dd');
    expect(read2.getMiddle()).to.equal('a');
  });
});


describe('numberWords', () => {
  it('Returns numbers in words', () => {
    const wordsInNum = '325';
    const wordsInNum1 = '100';
    expect(wordsInNum.numberWords()).to.equal('three two five');
    expect(wordsInNum1.numberWords()).to.equal('one zero zero');
  });
});


describe('isDigit', () => {
  it('Returns true if the string is a digit', () => {
    const oneDigit = '2';
    const mulDigits = '150';
    expect(oneDigit.isDigit()).to.equal(true);
    expect(mulDigits.isDigit()).to.equal(false);
  });
});
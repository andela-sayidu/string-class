/* eslint-disable */

const expect = require('chai').expect;
require('../src/string');

describe('stringClassExtended', () => {
  describe('hasVowels', () => {
    it('returns true if the string contains vowels', () => {
      expect('vowels'.hasVowels()).to.equal(true);
      expect('built'.hasVowels()).to.equal(true);
    });

    it('returns false if the string does not contain vowels', () => {
      expect('gypsy'.hasVowels()).to.equal(false);
      expect('lynch'.hasVowels()).to.equal(false);
    });
  });

  describe('toUpper', () => {
    it('returns a string in Uppercase', () => {
      expect('uppercase'.toUpperCase()).to.equal('UPPERCASE');
      expect('Edit Casing'.toUpper()).to.equal('EDIT CASING');
      expect('STRING'.toUpper()).to.equal('STRING');
    });

    it('should be able to handle string with symbols/numbers', () => {
      expect('upper123case#'.toUpper()).to.equal('UPPER123CASE#');
      expect('#edit *Casing*'.toUpper()).to.equal('#EDIT *CASING*');
    });
  });

  describe('toLower', () => {
    it('returns a string in lowercase', () => {
      expect('LOWERCASE'.toLower()).to.equal('lowercase');
      expect('Casing'.toLower()).to.equal('casing');
      expect('string'.toLower()).to.equal('string');
    });

    it('should be able to handle string with symbols/numbers', () => {
      expect('*LOWER*CASE*'.toLower()).to.equal('*lower*case*');
      expect('*IGNORE*lower1*'.toLower()).to.equal('*ignore*lower1*');
    });
  });

  describe('ucFirst', () => {
    it('returns the first character in Uppercase', () => {
      expect('first'.ucFirst()).to.equal('First');
      expect('upper'.ucFirst()).to.equal('Upper');
    });
    it('if the first character is Uppercase still return Uppercase', () => {
      expect('Checks'.ucFirst()).to.equal('Checks');
      expect('Upper'.ucFirst()).to.equal('Upper');
    });
  });

  describe('isQuestion', () => {
    it('verifies if a string is a question', () => {
      expect('first?'.isQuestion()).to.equal(true);
      expect('My name is what?'.isQuestion()).to.equal(true);
    });

    it('returns true only if the ? symbol is at the end of the string', () => {
      expect('Invalid ? Layout'.isQuestion()).to.equal(false);
      expect('Question? or not valid'.isQuestion()).to.equal(false);
    });
  });


  describe('words', () => {
    it('returns a list of the words in the string', () => {
      expect('first of all'.words()).to.deep.equal(['first', 'of', 'all']);
    });
    it('returns the word list ignoring symbols and numbers', () => {
      expect('onewo11rd # minds'.words()).to.deep.equal(['minds']);
    });

  });

  describe('wordCount', () => {
    it('returns the number of words in the string', () => {
      expect('first of all'.wordCount()).to.equal(3);
    });
    it('verify that only valid words are counted', () => {
      expect('first of all 333 word11Count'.wordCount()).to.equal(3);
    });
  });

  describe('toCurrency', () => {
    it('returns a currency representation of the String', () => {
      expect('1000000'.toCurrency()).to.equal('1,000,000');
      expect('1000.00'.toCurrency()).to.equal('1,000.00');
      expect('11111.11'.toCurrency()).to.equal('11,111.11');
    });
  });

  describe('fromCurrency', () => {
    it('returns a number representation of the Currency', () => {
      expect('1,000,000'.fromCurrency()).to.equal(1000000);
      expect('1,000.001'.fromCurrency()).to.equal(1000.00);
      expect('11,111.11'.fromCurrency()).to.equal(11111.11);
    });
  });

  describe('inverseCase', () => {
    it('returns the inverse of the current lettercase', () => {
      const inverse = 'tEST tHE iNVErSE cASE fUNCTION';
      expect(inverse.inverseCase()).to.equal('Test The InveRse Case Function');
      expect('Mr. Ben'.inverseCase()).to.equal('mR. bEN');
    });
  });

  describe('alternatingCase', () => {
    it('returns the letters in alternating cases.', () => {
      expect('Alternating'.alternatingCase()).to.equal('aLtErNaTiNg');
      expect('inverse DNA'.alternatingCase()).to.equal('iNvErSe dNa');
      expect('Onomatopoeia'.alternatingCase()).to.equal('oNoMaToPoEiA');
    });
  });


  describe('getMiddle', () => {
    it('returns the character(s) in the middle of the string', () => {
      expect('middle'.getMiddle()).to.equal('dd');
      expect('reads'.getMiddle()).to.equal('a');
      expect('read'.getMiddle()).to.equal('ea');
      expect(' '.getMiddle()).to.equal(' ');
    });
  });


  describe('numberWords', () => {
    it('returns numbers in words', () => {
      expect('325'.numberWords()).to.equal('three two five');
      expect('1000'.numberWords()).to.equal('one zero zero zero');
    });
  });


  describe('isDigit', () => {
    it('returns true if the string is a digit', () => {
      expect('3'.isDigit()).to.equal(true);
      expect('34'.isDigit()).to.equal(false);
    });
    it('returns false if the string is a digit contains alphabet', () => {
      expect('2a'.isDigit()).to.equal(false);
      expect('1b50b'.isDigit()).to.equal(false);
    });
  });

  describe('doubleCheck', () => {
    it('returns true if a string contains double characters', () => {
      expect('testforToo'.doubleCheck()).to.equal(true);
      expect('  '.doubleCheck()).to.equal(true);
      expect('aa'.doubleCheck()).to.equal(true);
      expect('!!'.doubleCheck()).to.equal(true);
    });
  });
});

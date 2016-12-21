const extendsStringClass = {

  /**
   * hasVowels()
   * Returns true if the string contains vowels.
   * @returns {Boolean}
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * toUpper()
   * Returns string with all characters in upper case.
   * @returns {String}
   */
  toUpper() {
    return this.replace(/[a-z]/g, match =>
      String.fromCharCode(match.charCodeAt(0) - 32));
  },

  /**
   * toLower()
   * Returns string with all characters in lower case.
   * @returns {String}
   */
  toLower() {
    return this.replace(/[A-Z]/g, match =>
      String.fromCharCode(match.charCodeAt(0) + 32));
  },

  /**
   * ucFirst()
   * Returns the first character in upperCase.
   * @returns {String}
   */
  ucFirst() {
    return this.replace(/^[a-z]/, match =>
      String.fromCharCode(match.charCodeAt(0) - 32));
  },

  /**
   * isQuestion()
   * Returns true if the string is a question.
   * @returns {Boolean}
   */
  isQuestion() {
    return /\?$/g.test(this);
  },

  /**
   * words()
   * Returns a list of the words in the string as an Array
   * @returns {Array}
   */
  words() {
    return this.match(/\b[a-zA-Z]+(?!\d)\b/g);
  },

  /**
   * wordCount()
   * Returns the number of words in the string
   * @returns {Number}
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * toCurrency()
   * Returns a currency representation of the String
   * @returns {String}
   */
  toCurrency() {
    return this.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  },

  /**
   * fromCurrency()
   * Returns a number representation of the Currency
   * @returns {Number}
   */
  fromCurrency() {
    return Number(this.replace(/,|[.\d]+/g, ''));
  },

  /**
   * inverseCase()
   * Returns each letter in the string as an inverse of its current case
   * @returns {String}
   */
  inverseCase() {
    return this.replace(/[a-z]/gi, (match) => {
      if ((/[a-z]/g).test(match)) {
        return match.toUpper();
      }
      return match.toLower();
    });
  },

  /**
   * alternatingCase()
   * returns the letters in alternating cases.
   * @returns {String}
   */
  alternatingCase() {
    return this.replace(/[a-z]/gi, (match, count) => {
      if (count % 2 !== 0) {
        return match.toUpper();
      }
      return match.toLower();
    });
  },

  /**
   * getMiddle()
   * Returns the character(s) in the middle of the string
   * @returns {String}
   */
  getMiddle() {
    const splitString = this.split('');
    const wordLength = splitString.length;
    const middle = Math.floor(wordLength / 2);

    if (wordLength % 2 === 0) {
      return splitString[middle - 1] + splitString[middle];
    }
    return splitString[middle];
  },


  /**
   * numberWords()
   * Returns numbers in words
   * @returns {String}
   */
  numberWords() {
    const numDict = {
      0: 'zero ',
      1: 'one ',
      2: 'two ',
      3: 'three ',
      4: 'four ',
      5: 'five ',
      6: 'six ',
      7: 'seven ',
      8: 'eight ',
      9: 'nine ',
    };

    let numInWords = '';
    const numbers = this.split('');
    numbers.forEach((elem) => {
      numInWords += numDict[elem];
    });
    return numInWords.trim();
  },

  /**
   * isDigit()
   * Returns the numbers in words
   * @returns {Boolean}
   */
  isDigit() {
    return /^\d{1}$/.test(this);
  },

  /**
   * doubleCheck()
   * Returns true if a string contains double characters
   * @returns {Boolean}
   */
  doubleCheck() {
    return (/(.)\1/g).test(this);
  },
};

Object.assign(String.prototype, extendsStringClass);

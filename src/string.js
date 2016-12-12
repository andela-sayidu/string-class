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
    return this.replace(/[a-z]/g, (match) => {
      return String.fromCharCode(match.charCodeAt(0) - 32);
    });
  },

  /**
   * toLower()
   * Returns string with all characters in lower case.
   * @returns {String}
   */
  toLower() {
    return this.replace(/[A-Z]/g, (match) => {
      return String.fromCharCode(match.charCodeAt(0) + 32);
    });
  },

  /**
   * ucFirst()
   * Returns the first character in upperCase.
   * @returns {String}
   */
  ucFirst() {
    return this.replace(/^[a-z]/, (match) => {
      return String.fromCharCode(match.charCodeAt(0) - 32);
    });
  },

  /**
   * isQuestion()
   * Returns true if the string is a question.
   * @returns {Boolean}
   */
  isQuestion() {
    return /[?]$/g.test(this);
  },

  /**
   * words()
   * Returns a list of the words in the string as an Array
   * @returns {Array}
   */
  words() {
    return this.match(/\w+/g);
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
    return parseInt(this.replace(/(\d)[,](?=(\d{3})+(?!\d))/g, '$1'));
  },

  /**
   * inverseCase()
   * Returns each letter in the string as an inverse of its current case
   * @returns {String}
   */
  inverseCase() {
    return this.replace(/\w/g, (match) => {
      if ((/[a-z]/g).test(match)) {
        return match.toUpper();
      } else {
        return match.toLower();
      }
    });
  },

  /**
   * alternatingCase()
   * returns the letters in alternating cases.
   * @returns {String}
   */
  alternatingCase() {
    let count = 0;
    return this.replace(/\w/g, (match) => {
      if (count % 2 != 0) {
        count += 1;
        return match.toUpper();
      } else {
        count += 1;
        return match.toLower();
      }
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

    if (wordLength % 2 == 0) {
      return splitString[middle - 1] + splitString[middle]
    } else {
      return splitString[middle];
    }
  },

};

Object.assign(String.prototype, extendsStringClass);
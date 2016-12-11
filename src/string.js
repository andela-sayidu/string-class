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
   wordCount(){
     return this.words().length;
   }
};

Object.assign(String.prototype, extendsStringClass);
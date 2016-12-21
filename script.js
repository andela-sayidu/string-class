    /* eslint-disable */
    function applyFunction() {
      let testString = document.getElementById("testString").value;
      let selectMethod = document.getElementById("selectMethod").value;
      let error = '';
      let result;
      let methodDetails = '';

      if (testString === '' || testString === undefined) {
        result = '';
        error = 'An Error Occured: Please enter a String';
      } else {
        switch (selectMethod) {
          case "hasVowels":
            result = testString.hasVowels();
            methodDetails = 'hasVowels: Checks if a string contains vowels.';
            break;
          case "toUpper":
              methodDetails = 'toUpper: Converts a string to uppercase characters';
            if ((/^\d+$/).test(testString)) {
              result = '';
              error = 'An Error Occured: Please insert words only';
            } else {
              result = testString.toUpper();
            }
            break;
          case "toLower":
            methodDetails = 'toLower: Converts a string to lowercase characters.';
            if ((/^\d+$/).test(testString)) {
              result = '';
              error = 'An Error Occured: Please insert words';
            } else {
              result = testString.toLower();
            }
            break;
          case "ucFirst":
            methodDetails = 'ucFirst: Converts the first character of a string to uppercase.';
            if ((/^\d+$/).test(testString)) {
              result = '';
              error = 'An Error Occured: Please insert words';
            } else {
              result = testString.ucFirst();
            }
            break;
          case "isQuestion":
            methodDetails = 'isQuestion: Checks if a string is a question.';
            result = testString.isQuestion();
            break;
          case "words":
            methodDetails = 'Returns the list of words in a string as an array.';
            if (testString.words() == null) {
              error = ' No words found';
              result = '';
            } else {
              result = testString.words();
            }
            break;
          case "wordCount":
            methodDetails = 'wordCount: Counts the number of words in a string.';
            result = testString.wordCount();
            break;
          case "toCurrency":
           if(/[a-z]/i.test(testString)) {
             result = '';
            error = 'An Error Occured: Please insert Numbers only';
           }else {
            methodDetails = 'toCurrency: Converts a string to a currency format.';
            result = testString.toCurrency();
           }
            break;
          case "fromCurrency":
          if(/[a-z]/i.test(testString)) {
             result = '';
            error = 'An Error Occured: Please insert Numbers only';
           }else {
            methodDetails = 'fromCurrency: Converts a string from currency format to number.';
            result = testString.fromCurrency();
           }
            break;
          case "inverseCase":
            methodDetails = 'inverseCase: Returns a string passed in with inverted character cases.';
            result = testString.inverseCase();
            break;
          case "alternatingCase":
            methodDetails = 'alternatingCase: Returns a string passed in with alternating character cases starting with lowercase.';
            result = testString.alternatingCase();
            break;
          case "getMiddle":
            methodDetails = 'getMiddle: Returns the character(s) in the middle of a string.';
            result = testString.getMiddle();
            break;
          case "numberWords":
            methodDetails = 'numberWords: Returns the word equivalent of the numbers passed in.';
            if ((/^\d+$/).test(testString)) {
              result = testString.numberWords();
            } else {
              result = '';
              error = 'An Error Occured: Please insert Numbers only';
            }
            break;
          case "isDigit":
            methodDetails = 'isDigit: Checks if a string is a single digit.';
            if ((/^\d+$/).test(testString)) {
              result = testString.isDigit();
            } else {
              result = '';
              error = 'An Error Occured: Please insert Numbers only';
            }
            break;
          case "doubleCheck":
            methodDetails = 'doubleCheck: Checks if a string contains double characters.';
            result = testString.doubleCheck();
            break;
          default:
            result = "Choose a function";
        };
      }
      return document.getElementById("result").innerHTML = "Result: " + result,
        document.getElementById("error").innerHTML = error, document.getElementById('methodDetails').innerHTML = methodDetails;
    };
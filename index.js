const fs = require('fs');

const wordList = fs.readFileSync('words.json', 'utf8').split('\n').map(line => line.trim());

function words(options) {
  const defaultOptions = {
    min: 1,
    max: 1,
    wordsPerString: 1,
    formatter: word => word,
    separator: ' ',
    join: ' '
  };

  options = { ...defaultOptions, ...options };

  function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
  }

  function getRandomWordsWithMaxLength(maxLength) {
    let words = [];
    while (words.length < options.wordsPerString) {
      let word = getRandomWord();
      if (word.length <= maxLength) {
        words.push(options.formatter(word));
      }
    }
    return words.join(options.separator);
  }

  function generateWords() {
    if (options.max && options.max < options.wordsPerString) {
      throw new Error('max cannot be less than wordsPerString');
    }

    let result = [];
    const count = options.exactly || Math.floor(Math.random() * (options.max - options.min + 1)) + options.min;
    
    for (let i = 0; i < count; i++) {
      const wordString = options.maxLength ? getRandomWordsWithMaxLength(options.maxLength) : getRandomWord();
      result.push(wordString);
    }
    return result.join(options.join);
  }

  try {
    return generateWords();
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

module.exports = words;

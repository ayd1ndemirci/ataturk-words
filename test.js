const quotes = require('./index');

const options = {
  min: 2, // Minimum number of quotes
  max: 5, // Maximum number of quotes
  quotesPerString: 1, // Quotes per string
  formatter: (quote) => `\"${quote}\"`, // Formatter function for each quote
  separator: ' ', // Separator between quotes in a string
  join: '\n' // Join multiple strings with a new line
};

console.log(quotes(options));

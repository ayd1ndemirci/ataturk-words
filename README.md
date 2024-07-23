# 🇹🇷 Atatürk Quotes Generator
A Node.js module that generates inspiring quotes from Mustafa Kemal Atatürk. Customize the number, length, and format of quotes easily. Perfect for adding a touch of wisdom to your projects.

## 🚀 Installation

```bash
npm install ataturk-quotes-generator

### test.js

```javascript
const quotes = require('./index');

const testCases = [
  {
    options: { min: 1, max: 2, quotesPerString: 1 },
    description: 'Generate 1-2 strings with 1 quote each'
  },
  {
    options: { min: 1, max: 1, quotesPerString: 2, formatter: (quote) => `**${quote}**` },
    description: 'Generate 1 string with 2 formatted quotes'
  },
  {
    options: { min: 2, max: 5, quotesPerString: 1, separator: '-', join: '\n' },
    description: 'Generate 2-5 strings with 1 quote each, joined by new lines'
  },
];

testCases.forEach((testCase, index) => {
  console.log(`Test Case ${index + 1}: ${testCase.description}`);
  console.log(quotes(testCase.options));
  console.log('---');
});

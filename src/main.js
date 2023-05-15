const fs = require('fs');
const { parseFont, transpose, chunk, generateFancySentence, toString, addStyle } = require('./fancy-font.js');

const main = () => {
  const rawData = fs.readFileSync('./Resources/input.txt', 'utf-8');

  const [fontWidth, fontHeight, text, ...alphabet] = parseFont(rawData);
  const _alphabet = addStyle(alphabet, fontWidth);
  const fancyMessage = generateFancySentence(text, _alphabet);

  console.log(toString(fancyMessage));
}

main();
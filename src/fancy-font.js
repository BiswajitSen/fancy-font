const parseFont = (rawData) => {
  return rawData.split('\n');
};

const transpose = (matrix) => {
  return matrix[0].map((_, index) => matrix.map((list) => list[index]));
};

const chunk = (list, chunkSize) => {
  return list.reduce(function (chunks, letter) {
    let lastChunk = chunks.length - 1;

    if (chunks[lastChunk].length === chunkSize) {
      chunks.push([]);
      lastChunk++;
    }
    chunks[lastChunk].push(letter);

    return chunks;
  }, [[]]);
};

const addStyle = (alphabet, fontWidth) => {
  return transpose(alphabet.map((row) => chunk(row.split(''), +fontWidth)));
};

const generateFancySentence = (text, alphabet) => {
  return text.split('').map((letter) => alphabet[letter.charCodeAt(0) - 65]);
};

const toString = (text) => {
  let fancyText = '';
  transpose(text).forEach((_) => {
    fancyText += _.flatMap((all) => all).join('') + '\n';
  });
  return fancyText;
};

exports.parseFont = parseFont;
exports.transpose = transpose;
exports.chunk = chunk;
exports.toString = toString;
exports.addStyle = addStyle;
exports.generateFancySentence = generateFancySentence;
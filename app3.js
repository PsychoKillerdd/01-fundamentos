const fs = require('fs');
const content = fs.readFileSync('readme.md','utf8');







const Word = content.split('');

const ReactCoUNTER = Word.filter((word) => word.toLowerCase() === 'react').length;
console.log('Palabras',Word.length)
console.log('Palabras react',ReactCoUNTER)
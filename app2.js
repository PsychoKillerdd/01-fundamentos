const fs = require('fs');
const data= fs.readFileSync('readme.md','utf8');

const newData = data.replace(/React/ig, 'Angular');
console.log(data)

fs.writeFileSync('READMEANGULAR.MD',newData);


console.log('Hola Mundo!')
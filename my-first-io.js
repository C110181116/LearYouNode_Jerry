const fs = require('fs');
const file = fs.readFileSync(process.argv[2]).toString();
const textSplit = file.split("\n");
console.log(textSplit.length - 1);
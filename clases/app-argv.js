const { createFile } = require('../helpers/multiply');
const { argv } = require('yargs');

console.clear();
// const base = 11;

const [, , arg3 = 'base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');

console.log(base);

createFile(base)
  .then((name) => console.log(name))
  .catch((err) => console.log(err));

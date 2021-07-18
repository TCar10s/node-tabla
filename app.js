const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

// console.log(argv);

createFile(argv.b, argv.l, argv.h)
  .then((name) => console.log(name))
  .catch((err) => console.log(err));

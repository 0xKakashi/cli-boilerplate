require('dotenv').config()
/**
 * @imports
 */
const Chalk = require('chalk');
const Commander = require('commander');
/**
 * @package
 * -
 * @name index
 * @desc cli index source
 * @file ~/index.js
 */
const program = new Commander.Command();
program.version('0.0.1');

program
  .option('-o, --option', 'cli option flag');

// program
//   .requiredOption('-o, --option', 'cli option');

// program
//   .command('my-command [target] <options>')
//   .description('command description')
//   .option('-a, --all', 'all options')
//   .action((src, dst) => {
//     console.log('executed');
//   });

program.parse(process.argv);
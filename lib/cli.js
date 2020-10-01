/**
 * @external
 */
const Commander = require('commander');

/**
 * @imports
 */

/**
 * @module
 * @name cli
 * @desc cli source
 * @file ~/lib/cli
 */
const program = new Commander.Command();
const version = '1.0.0';

/**
 * @instance
 * @name  cli
 * @desc  cli root instance
 * @usage $ cli <command> [options]
 */
program
  .name('my-cli')
  .version(version)
  .description('my cli description')
  .usage('<command> [options]')
  .option('-a, --all', 'all options');

/**
 * @instance
 * @name  sub
 * @desc  cli sub instance
 * @usage $ cli sub <command> [options]
 */
program
  .command('sub')
  .description('execute sub command')
  .action(() => {
    console.log('sub command');
  });

/**
 * @fires
 */
program.parse(process.argv);

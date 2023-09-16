import chalk from 'chalk';
import { cosmiconfigSync } from 'cosmiconfig';

const configLoader = cosmiconfigSync('tool');

module.export = function getConfig() {
  const result = configLoader.search(process.cwd());

  if (!result) {
    console.log(chalk.yellow('Could not find configuration, using default'));
    return { port: 1234 };
  }
  console.log('Found configuration', result.config);
  return result.config;
};

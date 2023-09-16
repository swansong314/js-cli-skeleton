import chalk from 'chalk';

const start = function (config) {
  console.log(chalk.bgCyanBright('Starting the app'));
  console.log(chalk.gray('Received configuration to start - '), config);
};

export default start;

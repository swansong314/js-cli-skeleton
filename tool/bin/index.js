#!/usr/bin/env node

import arg from 'arg';
import chalk from 'chalk';
import getConfig from '../config/config-manager.js';
import start from '../command/start.js';

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  if (args['--start']) {
    const config = getConfig();
    start(config);
    // console.log(chalk.bgCyanBright(`starting the tool`));
  }
} catch (e) {
  console.log(chalk.yellow(e.message));
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')} ${chalk.whiteBright('start the tool')}
  ${chalk.greenBright('--build')} ${chalk.whiteBright('build the tool')}`);
}

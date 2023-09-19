#!/usr/bin/env node

import arg from 'arg';
import chalk from 'chalk';
import getConfig from '../src/config/config-manager.js';
import start from '../src/command/start.js';
import createLogger from '../src/logger.js';

const logger = createLogger('bin');

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  logger.debug('Received args', args);

  if (args['--start']) {
    const config = getConfig();
    start(config);
  }
} catch (e) {
  logger.warning(e.message);
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')} ${chalk.whiteBright('start the tool')}
  ${chalk.greenBright('--build')} ${chalk.whiteBright('build the tool')}`);
}

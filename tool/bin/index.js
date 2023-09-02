#!/usr/bin/env node

import arg from 'arg';
import chalk from 'chalk';
import { pkgUpSync } from 'pkg-up';
import { readFileSync } from 'fs';

try {
  const pkgPath = pkgUpSync({ cwd: process.cwd() });
  const pkg = readPkgCofig(pkgPath);

  if (pkg.tool) {
    console.log(chalk.bgCyanBright(`tool version: ${pkg.version}`));
  } else {
    console.log(chalk.bgRedBright(`could not find config for tool`));
  }

  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  if (args['--start']) {
    console.log(chalk.bgCyanBright(`starting the tool`));
  }
} catch (e) {
  console.log(chalk.yellow(e.message));
  usage();
}

function readPkgCofig(pkgPath) {
  try {
    const data = readFileSync(pkgPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading the file:', error.message);
  }
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')} ${chalk.whiteBright('start the tool')}
  ${chalk.greenBright('--build')} ${chalk.whiteBright('build the tool')}`);
}

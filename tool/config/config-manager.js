import chalk from 'chalk';
import { pkgUpSync } from 'pkg-up';
import { readFileSync } from 'fs';

const readPkgCofig = function (pkgPath) {
  try {
    const data = readFileSync(pkgPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading the file:', error.message);
  }
};

module.export = function getConfig() {
  const pkgPath = pkgUpSync({ cwd: process.cwd() });
  const pkg = readPkgCofig(pkgPath);

  if (pkg.tool) {
    console.log('Found configuration', pkg.tool);
    return pkg.tool;
  } else {
    console.log(chalk.yellow('Could not find configuration, using default'));
    return { port: 1234 };
  }
};

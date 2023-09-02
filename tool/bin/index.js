#!/usr/bin/env node

import arg from 'arg';

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  if (args['--start']) {
    console.log('starting the tool');
  }
} catch (e) {
  console.log(e.message);
  usage();
}

// console.log(args);

function usage() {
  console.log(`tool [CMD]
  --start\tStarts the app
  --build\tBuilds the app`);
}

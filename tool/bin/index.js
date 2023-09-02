#!/usr/bin/env node

import arg from 'arg';

const args = arg({
  "--start": Boolean,
  "--build": Boolean,
});

if(args["--start"]){
  console.log("starting the tool");
}

// console.log(args);

import { cosmiconfigSync } from 'cosmiconfig';
import schema from './schema.json' assert { type: 'json' };
import betterAjvErrors from 'better-ajv-errors';
import Ajv from 'ajv';
import createLogger from '../logger.js';

const ajv = new Ajv({ jsonPointers: true });
const configLoader = cosmiconfigSync('tool');
const logger = createLogger('config:manager');

const getConfig = function () {
  const result = configLoader.search(process.cwd());

  if (!result) {
    logger.warning('Could not find configuration, using default');
    return { port: 1234 };
  }

  const isValid = ajv.validate(schema, result.config);
  if (!isValid) {
    logger.warning('Invalid configuration was supplied');
    console.log(betterAjvErrors(schema, result.config, ajv.errors));
    process.exit(1);
  }

  logger.debug('Found configuration', result.config);
  return result.config;
};

export default getConfig;

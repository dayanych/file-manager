import fs from 'fs';
import process from 'node:process';
import { checkPath } from '../helpers/check-path.js';

export const cat = async (classPath, argPath) => {
  return new Promise((resolve) => {
    const path = checkPath(classPath, argPath);
    const stream = fs.createReadStream(path, { encoding: 'utf-8' });

    stream.on('error', (error) => {
      process.stdout.write(`Operation failed: ${error.message}\n`);
    });

    stream.on('data', (data) => {
      process.stdout.write(data);
    });

    stream.on('end', () => {
      process.stdout.write('\n');
      resolve();
    });
  });
};

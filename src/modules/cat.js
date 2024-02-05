import fs from 'fs';
import process from 'node:process';
import { cd } from './cd.js';

export const cat = async (classPath, argPath) => {
  return new Promise((resolve) => {
    const path = cd(classPath, argPath);
    const stream = fs.createReadStream(path, { encoding: 'utf-8' });

    stream.on('data', (data) => {
      process.stdout.write(data);
    });

    resolve();
  });
};

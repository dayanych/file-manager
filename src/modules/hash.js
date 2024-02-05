import fs from 'fs';
import crypto from 'crypto';
import { stdout } from 'process';
import { checkPath } from '../helpers/check-path.js';

export const hash = async (currentPath, pathToFile) => {
  return new Promise((resolve) => {
    const checkingPath = checkPath(currentPath, pathToFile);
    const hash = crypto.createHash('sha256');
    const fsStream = fs.createReadStream(checkingPath);

    fsStream.on('error', (error) => {
      stdout.write(`Operation failed: ${error.message}\n`);
    });

    fsStream.on('data', data => hash.update(data));
  
    fsStream.on('end', () => {
      stdout.write(hash.digest('hex') + '\n');
      resolve();
    });
  });
};

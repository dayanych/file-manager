import path from 'path';
import fs from 'fs';
import { stdout } from 'process';
import { checkPath } from '../helpers/check-path.js';

export const cp = async (currentPath, pathToFile, newPathToFile) => {
  const fileName = path.basename(pathToFile);
  const readStreamPath = checkPath(currentPath, pathToFile);
  const writeStreamPath = checkPath(currentPath, newPathToFile, fileName);

  const readStream = fs.createReadStream(readStreamPath);
  const writeStream = fs.createWriteStream(writeStreamPath, {flags: 'w'});
  
  readStream.on('error', (error) => {
    stdout.write(`Operation failed: ${error.message}\n`);
  });

  writeStream.on('error', (error) => {
    stdout.write(`Operation failed: ${error.message}\n`);
  });

  readStream.pipe(writeStream);
  return readStreamPath;
};

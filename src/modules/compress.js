import zlib from 'zlib';
import path from 'path';
import fs from 'fs';
import { checkPath } from "../helpers/check-path.js";

export const compress = async (currentPath, pathToFile, pathToDestination) => {
  const fileName = path.basename(pathToFile) + '.br';
  const checkingPathToFile = checkPath(currentPath, pathToFile);
  const checkingPathToDestination = checkPath(currentPath, pathToDestination, fileName);
  console.log(checkingPathToDestination);

  const readStream = fs.createReadStream(checkingPathToFile);
  const writeStream = fs.createWriteStream(checkingPathToDestination);

  readStream.on('error', (error) => {
    stdout.write(`Operation failed: ${error.message}\n`);
  });

  writeStream.on('error', (error) => {
    stdout.write(`Operation failed: ${error.message}\n`);
  });

  const brotli = zlib.createBrotliCompress();
  readStream.pipe(brotli).pipe(writeStream);
};

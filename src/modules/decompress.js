import zlib from 'zlib';
import path from 'path';
import fs from 'fs';
import { stdout } from 'process';
import { checkPath } from "../helpers/check-path.js";

export const decompress = async (currentPath, pathToFile, pathToDestination) => {
  const brName = path.basename(pathToFile);
  const fileName = brName.slice(0, brName.length - 3);
  const checkingPathToFile = checkPath(currentPath, pathToFile);
  const checkingPathToDestination = checkPath(currentPath, pathToDestination, fileName);

  const readStream = fs.createReadStream(checkingPathToFile);
  const writeStream = fs.createWriteStream(checkingPathToDestination);

  readStream.on('error', (error) => {
    stdout.write(`Operation failed: ${error.message}\n`);
  });

  writeStream.on('error', (error) => {
    stdout.write(`Operation failed: ${error.message}\n`);
  });

  const brotli = zlib.createBrotliDecompress();
  readStream.pipe(brotli).pipe(writeStream);
};

import fs from 'fs';
import { stdout } from 'process';
import { checkPath } from '../helpers/check-path.js';

export const rm = async (currentPath, pathToFile) => {
  const path = checkPath(currentPath, pathToFile);

  fs.unlink(path, (error) => {
    if (error) stdout.write(`Operation failed: ${error.message}\n`);
  });
};

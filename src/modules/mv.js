import fs from 'fs';
import { stdout } from 'process';
import { cp } from './cp.js';

export const mv = async (currentPath, pathToFile, newPathToFile) => {
  const deletePath = await cp(currentPath, pathToFile, newPathToFile);

  fs.unlink(deletePath, (error) => {
    if (error) {
      stdout.write(`Operation failed: ${error.message}\n`);
    }
  });
};

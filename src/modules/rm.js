import fs from 'fs';
import { checkPath } from '../helpers/check-path.js';

export const rm = async (currentPath, pathToFile) => {
  const path = checkPath(currentPath, pathToFile);

  fs.unlink(path, (error) => {
    if (error) throw error;
  });
};

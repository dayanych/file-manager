import fs from 'fs';
import { checkPath } from '../helpers/check-path';

export const cd = async (currentPath, pathToDirectory) => {
  const newPath = checkPath(currentPath, pathToDirectory);

  await fs.promises.access(pathToDirectory, fs.constants.F_OK, (err) => {
    if (err) throw new Error('Path does not exist');
  });

  return newPath;
};

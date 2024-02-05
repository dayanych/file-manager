import path from 'path';
import fs from 'fs';

export const cd = (currentPath, pathToDirectory) => {
  if (path.isAbsolute(pathToDirectory)) {
    if (!fs.existsSync(pathToDirectory)) {
      throw new Error;
    }

    return pathToDirectory;
  }

  const newPath = path.join(currentPath, pathToDirectory);
  if (!fs.existsSync(newPath)) {
    throw new Error;
  }

  return newPath;
};

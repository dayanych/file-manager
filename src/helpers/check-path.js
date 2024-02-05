import path from 'path';

export const checkPath = (currentPath, newPath, fileName) => {
  let updatedPath;

  if (path.isAbsolute(newPath)) {
    updatedPath = newPath;
  } else {
    updatedPath = path.join(currentPath, newPath);
  }


  return fileName ? path.join(updatedPath, fileName) : updatedPath;
};

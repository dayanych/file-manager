import path from 'path';
import fs from 'fs';

export const rn = async (currentPath, oldName, newName) => {
  const oldPath = path.join(currentPath, oldName);
  const newPath = path.join(currentPath, newName);
  fs.rename(oldPath, newPath, () => {});
};

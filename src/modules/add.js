import path from 'path';
import fs from 'fs';

export const add = async (currentPath, fileName) => {
  const filePath = path.join(currentPath, fileName);
  const fileHandle = await fs.promises.open(filePath, 'a');
  await fileHandle.close(); 
};

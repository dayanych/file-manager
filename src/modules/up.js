import path from 'path';

export const up = (directory) => {
  return path.join(directory, '..');
};

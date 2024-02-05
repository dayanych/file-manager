import fs from 'fs';

export const ls = async (directory) => {
  return new Promise((resolve) => {
    fs.readdir(directory, { withFileTypes: true }, (_, files) => {
      const list = files.map((file) => ({
        name: file.name,
        type: file.isDirectory() ? 'directory' : 'file',
      }));

      const sortedList = list.sort((a, b) => {
        if (a.type === b.type) {
          return a.name.localeCompare(b.name);
        }
        return a.type === 'directory'? -1 : 1;
      });

      console.table(sortedList);
      resolve();
    });
  });
};

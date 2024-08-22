import fs from 'fs/promises';

export const writeToFile = async (fileName: string, data: string) => {
  await fs.writeFile(`${__dirname}/../assets/${fileName}`, data, {
    flag: 'w+',
  });
};

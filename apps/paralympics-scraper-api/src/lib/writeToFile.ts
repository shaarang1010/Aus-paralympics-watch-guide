import fs from 'fs/promises';

const BASE_PATH = __dirname + '../assets';
export const writeToFile = async (fileName: string, data: string) => {
  await fs.writeFile(`${BASE_PATH}/${fileName}`, data, {
    flag: 'w+',
  });
};

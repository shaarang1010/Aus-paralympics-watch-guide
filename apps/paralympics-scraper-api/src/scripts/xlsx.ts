import xlsx from 'xlsx';
import fs from 'fs';

export const scrapeXlsx = async () => {
  const file = xlsx.readFile(
    `${process.env.NX_SHARE_FOLDER_LOCATION}/Australian-Paralympic-Team-List-by-Sport-7-Aug-2024.xlsx`
  );

  const sheetNames = file.SheetNames;

  console.log(sheetNames);

  const totalSheets = sheetNames.length;

  const parsedData = [];

  for (let i = 0; i < totalSheets; i++) {
    // Convert to json using xlsx
    const tempData = xlsx.utils.sheet_to_json(file.Sheets[sheetNames[i]]);

    // Skip header row which is the colum names
    tempData.shift();

    parsedData.push(...tempData);
  }

  fs.writeFileSync(
    __dirname + '/assets/paralympics-athletes-2024.json',
    JSON.stringify(parsedData, null, 2)
  );

  console.log('XLSX scrape completed');
};

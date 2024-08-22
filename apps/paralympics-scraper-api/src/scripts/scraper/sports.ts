import playwright from 'playwright';
import type { Sport } from '@paralympics-2024/shared-types';

export const scrapeSportsList = async (timeout: number) => {
  console.log('Scraping sports list ... ');
  const browser = await playwright.chromium.launch({
    headless: true,
  });

  // create a browser
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(
    'https://medias.paris2024.org/uploads/2023/12/Schedule-competition-Paralympics.htm',
    {
      timeout: 2 * 60 * 1000,
    }
  ); // scrape the sports list from the accessible Schedule website.

  await page.waitForTimeout(timeout);

  const allSports = await page.locator(
    'p.MsoToc1 > a:nth-child(1) > span:nth-child(1)'
  );

  const count = await allSports.count();

  const sportsList: Array<Sport> = [];

  for (let i = 0; i < count; i++) {
    const sportName = await allSports.nth(i).textContent();
    sportsList.push({
      name: sportName,
      id: sportName.toLowerCase().split(' ').join('-'),
    });
  }

  await page.waitForTimeout(timeout);

  await browser.close();

  return sportsList;
};

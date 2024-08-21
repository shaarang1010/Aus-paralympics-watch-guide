import playwright from 'playwright';

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

  const allSports = await page.locator('p.MsoToc1').allTextContents();

  await page.waitForTimeout(timeout);

  console.log(allSports);

  await browser.close();
};

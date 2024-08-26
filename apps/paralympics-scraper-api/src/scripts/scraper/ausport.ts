// scrape aus sport sporting directory.

import playwright from 'playwright';

const DEFAULT_TIMEOUT = 3000;

type SportingOrg = {
  name: string;
  sport: string;
  isFunded: boolean;
  description: string;
};

export const scrapeAusportDirectory = async () => {
  console.log('Begining Scraping ====> ');

  const browser = await playwright.chromium.launch({ headless: true });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://www.sportaus.gov.au/australian_sports_directory', {
    timeout: 2 * 60 * 1000,
  });

  await page.waitForTimeout(DEFAULT_TIMEOUT);

  const allSports = page.locator('#sportDirectory > tbody > tr');

  await page.waitForTimeout(DEFAULT_TIMEOUT);

  const count = await allSports.count();

  const allSportOrgs: SportingOrg[] = [];

  for (let i = 0; i < count; i++) {
    const sportingOrgName = await allSports
      .nth(i)
      .locator('td')
      .nth(0)
      .textContent();
    const sportingOrgSport = await allSports
      .nth(i)
      .locator('td')
      .nth(1)
      .textContent();
    const isFunded = await allSports.nth(i).locator('td').nth(3).textContent();
    const sportingOrgDescription = await allSports
      .nth(i)
      .locator('td')
      .nth(4)
      .textContent();

    allSportOrgs.push({
      name: sportingOrgName.trim(),
      sport: sportingOrgSport.trim(),
      isFunded: isFunded.trim() === 'Funded' ? true : false,
      description: sportingOrgDescription.trim(),
    });
  }

  console.log(allSportOrgs);

  await browser.close();

  return allSportOrgs;
};

// import playwright from 'playwright';
// import type { EventDetails } from '@paralympics-2024/shared-types';

// const DEFAULT_TIMEOUT = 10000;
// const BASE_PARALYMPICS_URL =
//   'https://olympics.com/en/paris-2024/paralympic-games/schedule';
// export const scrapeEventsSchedule = async (
//   sportsList: string[]
// ): Promise<EventDetails[]> => {
//   const browser = await playwright.chromium.launch({ headless: true });
//   const context = await browser.newContext(); // launch clean browser context.

//   const page = await context.newPage(); // create a new page.

//   let hasAcceptedCookies = false;

//   for (const sport of sportsList) {
//     await page.goto(`${BASE_PARALYMPICS_URL}/${sport}`, {
//       timeout: 2 * 60 * 1000,
//     });

//     await page.waitForTimeout(DEFAULT_TIMEOUT); // wait for the page to load.

//     if (!hasAcceptedCookies) {
//       await page.locator('#onetrust-accept-btn-handler').click(); // accept cookies
//       hasAcceptedCookies = true;
//       await page.waitForTimeout(DEFAULT_TIMEOUT); // wait for the page to load.
//     }
//   }
// };

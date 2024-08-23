import playwright from 'playwright';
import type { EventDetails } from '@paralympics-2024/shared-types';

const DEFAULT_TIMEOUT = 10000;
const BASE_PARALYMPICS_URL =
  'https://olympics.com/en/paris-2024/paralympic-games/schedule';
export const scrapeEventsSchedule = async (sportsList: string[]) => {
  const browser = await playwright.chromium.launch({ headless: true });
  const context = await browser.newContext(); // launch clean browser context.

  const page = await context.newPage(); // create a new page.

  let hasAcceptedCookies = false;

  for (const sport of sportsList) {
    await page.goto(`${BASE_PARALYMPICS_URL}/${sport}`, {
      timeout: 2 * 60 * 1000,
    });

    await page.waitForTimeout(DEFAULT_TIMEOUT); // wait for the page to load.

    if (!hasAcceptedCookies) {
      await page.locator('#onetrust-accept-btn-handler').click(); // accept cookies
      hasAcceptedCookies = true;
      await page.waitForTimeout(DEFAULT_TIMEOUT); // wait for the page to load.
    }

    const eventList = page.locator('[data-cy="events-list"]'); // gets all the events for that sport.
    const totalEvents = await eventList.count(); // get the total number of events for that sport.

    for (let i = 0; i < totalEvents; i++) {
      const eventDateDetails = eventList.locator(
        '[data-cy="sport-schedule-date"]'
      ); // get date details fragment.
      let eventDay = await eventDateDetails
        .nth(i)
        .locator('span.date-wrapper')
        .first()
        .textContent();
      let eventDate = await eventDateDetails.nth(i).locator('h2').textContent();
      let eventMonth = await eventDateDetails
        .nth(i)
        .locator('span.date-wrapper')
        .last()
        .textContent();

      const eventDetailsList = eventList
        .nth(i)
        .locator('[data-cy="videos-hero]');
      const totalEventDetails = await eventDetailsList.count();
      for (let j = 0; j < totalEventDetails; j++) {}
    }
  }

  await browser.close();
};

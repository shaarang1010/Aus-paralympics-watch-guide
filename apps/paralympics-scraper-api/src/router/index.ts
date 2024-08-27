import express from 'express';

import { scrapeSportsList } from '../scripts/scraper/sports';
import { writeToFile } from '../lib/writeToFile';
import { scrapeAusportDirectory } from '../scripts/scraper/ausport';
import { scrapeXlsx } from '../scripts/xlsx';
import sports from '../assets/sports-list.json';
import { scrapeEventsSchedule } from '../scripts/scraper/events';

const router = express.Router();

const TIMEOUT = 10000;

router.get('/scrape-sports-list', async (_, res, next) => {
  try {
    const allParaSports = await scrapeSportsList(TIMEOUT);
    if (allParaSports.length > 0) {
      await writeToFile('sports-list.json', JSON.stringify(allParaSports));
      console.log(JSON.stringify(allParaSports, null, 2));
    }
    res.json({ message: 'Sports written to file' }).status(200);
  } catch (err) {
    console.error(err);
    res.json({ message: 'Error scraping sports list' }).status(500);
  }
  next();
});

router.get('/scrape-ausport-directory', async (_, res, next) => {
  try {
    const allSportOrgs = await scrapeAusportDirectory();
    res.json({ sports: allSportOrgs }).status(200);
    next();
  } catch (err) {
    console.error(err);
  }
});

router.get('/scrape-paralympic-events', async (_, res, next) => {
  try {
    console.log(sports.map((s) => s.name));
    await scrapeEventsSchedule(['blind-football']);
    res.json({ message: 'Events scraped' }).status(200);
  } catch (err) {
    console.error(err);
    res.json({ message: 'Error scraping events' }).status(500);
  }
});

router.get('/xlsx-scrape', async (_, res, next) => {
  try {
    await scrapeXlsx();
    res.json({ message: 'XLSX scrape completed' }).status(200);
  } catch (err) {
    console.error(err);
  }
  next();
});

router.get('/test', (_, res) => {
  res.send({ message: 'Welcome to Scraper API!' });
});

export default router;

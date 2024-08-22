import express from 'express';

import { scrapeSportsList } from '../scripts/scraper/sports';
import { writeToFile } from '../lib/writeToFile';
const router = express.Router();

const TIMEOUT = 10000;

router.get('/scrape-sports-list', async (_, res, next) => {
  try {
    const allParaSports = await scrapeSportsList(TIMEOUT);
    if (allParaSports.length > 0) {
      // await writeToFile(
      //   'sports-list.json',
      //   JSON.stringify(allParaSports, null, 2)
      // );
      console.log(JSON.stringify(allParaSports, null, 2));
    }
    res.json({ message: 'Sports written to file' }).status(200);
  } catch (err) {
    console.error(err);
    res.json({ message: 'Error scraping sports list' }).status(500);
  }
  next();
});

router.get('/test', (_, res) => {
  res.send({ message: 'Welcome to Scraper API!' });
});

export default router;

import express from 'express';

import { scrapeSportsList } from '../scripts/scraper/sports';
const router = express.Router();

const TIMEOUT = 10000;

router.get('/scraper-sports-list', async (_, res, next) => {
  try {
    await scrapeSportsList(TIMEOUT);
    res.json({ message: 'Scraping sports list' });
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

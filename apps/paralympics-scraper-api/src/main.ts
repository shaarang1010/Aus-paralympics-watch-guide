/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import router from './router';

const app = express();
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api', router);

const port = process.env.PORT || 3334;
const server = app.listen(port, async () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

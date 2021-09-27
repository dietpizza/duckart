import { env } from './config/env';
import { app } from './providers/express.provider';

import { connect } from 'mongoose';

const PORT = env().PORT;
const MONGO_URL = env().MONGO_URL;

setup().catch((err) => {
  console.log(err);
});

async function setup() {
  await connect(MONGO_URL);
  app.listen(PORT, () => {
    console.log('Server is running @', PORT);
  });
}

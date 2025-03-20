import mongoose from 'mongoose';
import { app } from './app';
import config from './config/config';

const main = async () => {
  try {
    console.log('connecting db ...');
    await mongoose.connect(config.db as string);
    console.log('connected ...');
    app.listen(config.port, () => {
      console.log(`server listen on : http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();

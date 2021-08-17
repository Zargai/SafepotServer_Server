import 'reflect-metadata';
import config from './config/index';
import express from 'express';

async function startServer() {
  const app = express();
  await require('./lib').default({ expressApp: app });
  app.listen(config.port, (err: any) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`
      ################################################
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             Server listening on port: ${config.port}
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      ################################################
    `);
  });
}

startServer();
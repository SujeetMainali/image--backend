import express from 'express';
import middlewares from '../middlewares';
import ErrorHandler from '../middlewares/error.middleware';
import cors from 'cors';
import path from 'path';
import { DotenvConfig } from './env.config';
import { RegisterRoutes } from '../routes';
import morgan from 'morgan';

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.static('public'));
app.use(morgan('dev'))

middlewares(app);
// const { RegisterRoutes } = require('../routes');
RegisterRoutes(app);

if (DotenvConfig.NODE_ENV === 'PRODUCTION') {
  app.use(express.static(path.resolve(process.cwd(), 'public/')));
  app.use(
    express.static(
      path.resolve(
        process.cwd(),
        '../../../../frontend',
        '_work',
        'dash.cliffbyte.com--frontend',
        'dash.cliffbyte.com--frontend',
        'dist'
      )
    )
  );
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        process.cwd(),
        '../../../../frontend',
        '_work',
        'dash.cliffbyte.com--frontend',
        'dash.cliffbyte.com--frontend',
        'dist',
        'index.html'
      )
    );
  });
} else {
  const swaggerUi = require('swagger-ui-express');
  const swaggerDocument = require('../../build/swagger.json');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.get('/', (req, res) => res.send('Please set to the production; CI CD is successful tho finally with pm2 server automatically setup also try 25 final test (I guess) one last for confirmation'));
}

app.use(ErrorHandler);

export default app;

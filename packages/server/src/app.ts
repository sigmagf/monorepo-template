import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { devMiddleware } from '~/middlewares/dev.middleware';

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE'], origin: '*' }));

if(process.env.NODE_ENV === 'development') {
  app.use(devMiddleware);
}

app.use((req, res, next) => { res.set('X-Powered-By', 'Furlan Solutions'); next(); });

app.use('*', (req, res) => res.status(404).json({ code: 404, message: 'Route not found', details: null }));

export { app };

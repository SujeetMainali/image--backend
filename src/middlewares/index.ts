import express, { Application } from 'express';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
const middlewares = (app: Application) => {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50000, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });
  app.use(express.json());
  app.use(limiter);
  app.use(compression());
};
export default middlewares;

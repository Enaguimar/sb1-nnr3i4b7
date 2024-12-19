import { Application } from 'express';
import { spaRouter } from './spa';
import { apiRouter } from './api';

export function setupRoutes(app: Application): void {
  // API routes (si se necesitan en el futuro)
  app.use('/api', apiRouter);

  // SPA routes
  app.use(spaRouter);
}
import { Application } from 'express';
import { errorHandler } from './errorHandler';
import { notFoundHandler } from './notFoundHandler';

export function setupErrorHandling(app: Application): void {
  // 404 handler
  app.use(notFoundHandler);
  
  // Error handler
  app.use(errorHandler);
}
import { Application } from 'express';
import compression from 'compression';
import { securityMiddleware } from './security';
import { staticFilesMiddleware } from './static';

export function setupMiddleware(app: Application): void {
  // Seguridad
  app.use(securityMiddleware.helmet);
  app.use(securityMiddleware.rateLimit);

  // Compresión
  app.use(compression());

  // Archivos estáticos - aplicar cada middleware
  staticFilesMiddleware.forEach(middleware => app.use(middleware));
}
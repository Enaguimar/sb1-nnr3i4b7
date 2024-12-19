import express from 'express';
import { setupMiddleware } from './middleware';
import { setupRoutes } from './routes';
import { setupErrorHandling } from './errors';
import { setupGracefulShutdown } from './utils/gracefulShutdown';
import { logger } from './utils/logger';
import { serverConfig } from './config';

export async function createServer() {
  const app = express();

  // Configurar middleware
  setupMiddleware(app);

  // Configurar rutas
  setupRoutes(app);

  // Configurar manejo de errores
  setupErrorHandling(app);

  // Configurar cierre graceful
  setupGracefulShutdown(app);

  return app;
}

if (require.main === module) {
  createServer().then(app => {
    app.listen(serverConfig.port, () => {
      logger.info(`Servidor ejecutándose en el puerto ${serverConfig.port}`);
    });
  });
}
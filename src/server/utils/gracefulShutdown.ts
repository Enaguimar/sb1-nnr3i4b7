import { Application } from 'express';
import { logger } from './logger';

export function setupGracefulShutdown(app: Application): void {
  const shutdown = (signal: string) => {
    return () => {
      logger.info(`${signal} recibido. Cerrando servidor...`);
      process.exit(0);
    };
  };

  process.on('SIGTERM', shutdown('SIGTERM'));
  process.on('SIGINT', shutdown('SIGINT'));
}
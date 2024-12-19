import express from 'express';
import path from 'path';
import compression from 'compression';
import { serverConfig } from './src/config/server.config';
import { securityMiddleware } from './src/middleware/security';
import { errorHandler } from './src/middleware/errorHandler';
import { logger } from './src/utils/logger';

const app = express();

// Middleware de seguridad
app.use(securityMiddleware.helmet);
app.use(securityMiddleware.rateLimit);

// Compresión gzip
app.use(compression());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

// Todas las rutas no encontradas redirigen al index.html (para SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Manejador de errores global
app.use(errorHandler);

// Iniciar servidor
app.listen(serverConfig.port, () => {
  logger.info(`Servidor ejecutándose en el puerto ${serverConfig.port}`);
});

// Manejo de señales de terminación
process.on('SIGTERM', () => {
  logger.info('SIGTERM recibido. Cerrando servidor...');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT recibido. Cerrando servidor...');
  process.exit(0);
});

export default app;
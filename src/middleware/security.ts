import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { serverConfig } from '../config/server.config';

export const securityMiddleware = {
  helmet: helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "https:", "data:", "https://images.unsplash.com"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'", "https:", "data:"],
        connectSrc: ["'self'"],
      },
    },
  }),
  
  rateLimit: rateLimit({
    windowMs: serverConfig.rateLimit.windowMs,
    max: serverConfig.rateLimit.max,
    message: 'Demasiadas peticiones desde esta IP, por favor intente más tarde'
  })
};
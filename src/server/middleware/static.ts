import express from 'express';
import path from 'path';
import { paths } from '../config/paths.config';

// Configuración para servir archivos estáticos
export const staticFilesMiddleware = [
  // Servir archivos del directorio dist
  express.static(paths.dist),
  
  // Servir archivos del directorio public
  express.static(paths.public),
  
  // Servir imágenes con configuración optimizada
  express.static(paths.images, {
    maxAge: '1y', // Cache por 1 año
    etag: true,
    lastModified: true,
    setHeaders: (res) => {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
      res.setHeader('Vary', 'Accept-Encoding');
    }
  })
];
import { Request, Response } from 'express';

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    status: 'error',
    message: 'Recurso no encontrado'
  });
}
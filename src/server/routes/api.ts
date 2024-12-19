import { Router } from 'express';

const router = Router();

// API routes aquí (si se necesitan en el futuro)
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export const apiRouter = router;
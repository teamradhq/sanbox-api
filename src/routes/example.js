import express from 'express';

import authMiddleware from '@/middleware/authMiddleware';
import example from '@/controllers/example';

const router = express.Router();
router.use(authMiddleware(process.env));

router.post('/', example.indexAction);
router.post('/list', example.listAction);
router.post('/view/:id', example.viewAction);

export default router;

import { Router } from 'express';
const router = Router();

import routerOperations from './api/operations/operations.routes';

router.use('/api/operations', routerOperations);

export default router;
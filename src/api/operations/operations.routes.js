import { Router } from 'express';
const router = Router();

import * as operationsControllers from './operations.controllers';

router.post('/', operationsControllers.createOperation);

router.get('/', operationsControllers.getOperations);

router.get('/:id', operationsControllers.getOperationById);

router.patch('/:id', operationsControllers.updateOperationById);

router.delete('/:id', operationsControllers.deleteOperationById);

export default router;
import { Router } from 'express';
import { fetchAll } from './controller';

const router = new Router();

router.get('/', fetchAll);

export default router;

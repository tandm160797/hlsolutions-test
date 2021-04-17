import { Router } from 'express';
import siteController from '../controllers/site.controller.js';

const router = Router();
router.get('/', siteController.home);

export default router;

import { Router } from 'express';
import jokeController from '../controllers/joke.controller.js';

const router = Router();
router.get('/', jokeController.index);
router.post('/', jokeController.create);
router.patch('/:id/funny-rated/', jokeController.funnyRated);
router.patch('/:id/not-funny-rated/', jokeController.notFunnyRated);

export default router;

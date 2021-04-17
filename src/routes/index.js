import cors from 'cors';
import siteRouter from './site.router.js';
import jokeRouter from './joke.router.js';

const corsOptions = {
	origin: 'http://127.0.0.1:5500'
};

const routes = (app) => {
	app.use(cors(corsOptions));
	app.use('/', siteRouter);
	app.use('/jokes/', jokeRouter);
};
export default routes;

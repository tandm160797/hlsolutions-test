import express from 'express';
import morgan from 'morgan';
import path from 'path';
import mongodb from './database/mongodb.js';
import routes from './routes/index.js';

(async () => {
	const app = express();
	const host = process.env.HOST || 'localhost';
	const port = process.env.PORT || 3000;

	app.set('view engine', 'pug');
	app.set('views', path.join(path.resolve(), 'src/resources/views'));

	app.use(morgan('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.static(path.join(path.resolve(), 'public')));

	routes(app);
	await mongodb.connect();
	app.listen(port, () => {
		console.log(`App listening at ${host}:${port}`);
	});
})();

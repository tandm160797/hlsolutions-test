import { Joke } from '../models/index.js';

const jokeController = {
	async index(req, res, next) {
		try {
			const jokes = await Joke.find().exec();
			return res.status(200).json({
				stt: 'success',
				msg: 'Get jokes successfully',
				jokes
			});
		} catch (err) {
			return next(err);
		}
	},

	async create(req, res, next) {
		const { body } = req;
		const joke = new Joke(body);
		try {
			await joke.save();
			return res.status(200).json({
				stt: 'success',
				msg: 'Create joke successfully',
				joke
			});
		} catch (err) {
			return next(err);
		}
	},

	async funnyRated(req, res, next) {
		try {
			const { id } = req.params;
			const joke = await Joke.findById(id).exec();

			if (!joke) {
				return res.status(400).json({
					stt: 'failure',
					msg: 'Cannot found joke by id'
				});
			}

			let { funnyCount } = joke;
			joke.funnyCount = ++funnyCount;
			await joke.save();
			return res.status(200).json({
				stt: 'success',
				msg: 'Funny rated sucessfully!',
				joke
			});
		} catch (err) {
			return next(err);
		}
	},

	async notFunnyRated(req, res, next) {
		try {
			const { id } = req.params;
			const joke = await Joke.findById(id).exec();

			if (!joke) {
				return res.status(400).json({
					stt: 'failure',
					msg: 'Cannot found joke by id'
				});
			}

			let { notFunnyCount } = joke;
			joke.notFunnyCount = ++notFunnyCount;
			await joke.save();
			return res.status(200).json({
				stt: 'success',
				msg: 'Not funny rated sucessfully!',
				joke
			});
		} catch (err) {
			return next(err);
		}
	}
};

export default jokeController;

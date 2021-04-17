import Mongoose from 'mongoose';

const connect = async () => {
	try {
		const user = process.env.MONGODB_USER || 'root';
		const password = process.env.MONGODB_PASSWORD || 'root';
		const database = process.env.MONGODB_DATABASE || 'hlsolutions-test';
		const connectString = `mongodb+srv://${user}:${password}@cluster0.ewyk4.mongodb.net/${database}?retryWrites=true&w=majority`;
		const mongooseOptions = {
			useNewUrlParser: true,
			useUnifiedTopology: true
		};
		await Mongoose.connect(connectString, mongooseOptions);
		console.log('Connect to MongoDB successfully!');
	} catch (err) {
		console.log('Connect to MongoDB failure!!!');
	}
};

export default { connect };

import Mongoose from 'mongoose';

const schema = new Mongoose.Schema({
	content: { type: String, default: '' },
	funnyCount: { type: Number, default: 0 },
	notFunnyCount: { type: Number, default: 0 }
});

export default Mongoose.model('Joke', schema);

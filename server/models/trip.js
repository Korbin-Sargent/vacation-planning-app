const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const tripSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true
		},
		description: {
			type: String
		},
		location: {
			type: String,
			required: true,
			trim: true
		},
		startDate: {
			type: Date,
			required: true,
			get: (timestamp) => dateFormat(timestamp)
		},
		endDate: {
			type: Date,
			required: true,
			get: (timestamp) => dateFormat(timestamp)
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		}
	},
	{
		toJSON: {
			virtuals: true
		},
		timestamps: true
	}
);

const Trip = model('Trip', tripSchema);

module.exports = Trip;

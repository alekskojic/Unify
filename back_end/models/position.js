const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const positionSchema = new Schema({
  title: {
    type: String,
		required: true
  },
	expirary_date: {
		type: Date,
		required: true
	},
	core_values: {
		type: Array,
		required: true
	},
	location: {
		address1: {
			type: String,
			required: true
		},
		address2: String,
		city: {
			type: String
		},
		province: {
			type: String,
			required: true
		},
		country: {
			type: String,
			required: true
		}
	},
	date_time: {
		type: Object,
		start_date: {
			type: Date,
			required: true
		},
		end_date: Date, // position might be indefinite
		start_time: String,
		end_time: String,
		number_of_volunteers_required: Number //0 will be infinity and nothing means it will not show or N/A
	},
	description: String,
	preconditions: { // embed preconditions object into this array
		type: Object,
		drivers_license: Boolean,
		background_check: Boolean,
		orientation_training: Boolean,
		minimum_age: Number,
		time_commitment: String,
		other_requirements: String
	},
	skills: Array,
	photo_path: String,
	keywords: Array
},
{
	timestamps: true
})

const Position = mongoose.model('Position', positionSchema);

module.exports = Position;
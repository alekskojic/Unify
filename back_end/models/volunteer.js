const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	core_values: {
		type: Array,
		required: true
	},
	experience: Array,
	profile_pic_path: String,
	location_pref: {
		type: Array,
		required: true
	},
	preconditions: {
		drivers_license: Boolean,
		background_check: Boolean,
		orientation_training: Array,
		minimum_age: Number,
		time_commitment: String,
		other_requirements: String
	},
	skills: Array,
	hours_logged: Number, //starts at 0
	description: String //Do we need this?
},
{
	timestamps: true
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
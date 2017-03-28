const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const volunteerSchema = new Schema({
	first_name: String,
	last_name: String,
	email: {
		type: String,
		unique: true
	},
	password: String,
	core_values: Array,
	experience: Array,
	profile_pic_path: String,
	location_pref: Array,
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
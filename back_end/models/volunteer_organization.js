const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerOrganizationSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	organization_type: {
		type: String,
		required: true
	},
	address1: {
		type: String,
		required: true,
		unique: true
	},
	address2: String,
	city: {
		type: String,
		required: true
	},
	province: {
		type: String,
		required: true
	},
	postal_code: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	website: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	core_values: {
		type: Array,
		required: true
	},
	what_we_do: {
		type: String,
		required: true
	},
	positions: Array, // embed position schema
	profile_pic_path: String
});

const VolunteerOrganization = mongoose.model('VolunteerOrganization', volunteerOrganizationSchema);

module.exports = VolunteerOrganization;
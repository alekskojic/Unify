const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const applicationSchema = new Schema({
	volunteer_id: ObjectId,
	postionId: ObjectId
})

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
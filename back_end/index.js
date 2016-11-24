const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const Volunteer = require('./models/volunteer');
const VolunteerOrganization = require('./models/volunteer_organization');

// let newVolunteer = Volunteer(
// 	{
// 		first_name: 'Aleksandar',
// 		last_name: 'Kojic',
// 		email: 'a.kojic12@gmail.com',
// 		password: '123456',
// 		core_values: [
// 			'Humanitarian', 
// 			'Animals', 
// 			'Poverty'
// 		],
// 		experience: [
// 			'helped here', 
// 			'helped there'
// 		],
// 		profile_pic_path: './profile_images/funny.jpg',
// 		location_pref: [
// 			'Toronto',
// 			'Ottawa',
// 			'Montreal'
// 		],
// 		precondtions: {
// 			drivers_license: true,
// 			background_check: false
// 		},
// 		skills: [
// 			'Computers',
// 			'Engineering'
// 		],
// 		hours_logged: 0
// 	}
// )

// newVolunteer.save((err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('Volunteer created!');
// 	}
// });

// Volunteer.find({}, (err, volunteers) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(volunteers);
// 	}
// });

// let newVolunteerOrganization = VolunteerOrganization(
// 	{

// 	}
// )

mongoose.connect('mongodb://localhost/data/db/');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected to db at /data/db/")
})

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`Server Started on http://localhost:${PORT}`);
	console.log('Press CTRL + C to stop server');
});

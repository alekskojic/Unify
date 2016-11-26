const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const Volunteer = require('./models/volunteer');
const VolunteerOrganization = require('./models/volunteer_organization');
const Position = require('./models/position');

app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//connect to mongoose
mongoose.connect('mongodb://localhost/data/db/');

//console.log a successful connection or if there's an error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected to db at /data/db/")
});

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
// 		preconditions: {
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
// 		name: 'Sicks Kids',
// 		organization_type: 'Non-Profit',
// 		address1: '123 Street W',
// 		city: 'Toronto',
// 		province: 'ON',
// 		postal_code: 'M1D 2R3',
// 		country: 'Canada',
// 		phone: '416-416-4164',
// 		website: 'sickkids.com',
// 		email: 'sick@kids.com',
// 		core_values: [
// 			'Children',
// 			'Medical Care'
// 		],
// 		what_we_do: 'Help sick children'
// 		// profile_pic_path: './profile_images/funny.jpg'
// 	}
// )

// newVolunteerOrganization.save((err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('Volunteer Organization created!');
// 	}
// });

// let update = {asdfasdf: './profile_images/funny.jpg'};
// let query = {'_id': '58375522b9947848c9e0e6aa'};
// VolunteerOrganization.update(query, update, {}, (err, object) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(object);
// 	}
// });

// let newPosition =  Position(
// 	{
// 		title: 'Helping some kids',
// 		expirary_date: new Date('2016-12-25'),
// 		core_values: [
// 			'children',
// 			'medical'
// 		],
// 		location: {
// 			address1: '12345 Helping St',
// 			city: 'Toronto',
// 			province: 'ON',
// 			country: 'Canada'
// 		}
// 	}
// );

// VolunteerOrganization.findById('583882cef7c40f7a5175a9b5')
// 	.then(volunteerorganization => {
// 		volunteerorganization.positions.push(newPosition);
// 		volunteerorganization.save()
// 			.then(volunteerorganization => {
// 				console.log(volunteerorganization.positions);
// 			})
// 			.catch(err => {
// 				console.log(err);
// 			})
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	})

app.listen(PORT, () => {
	console.log(`Server Started on http://localhost:${PORT}`);
	console.log('Press CTRL + C to stop server');
});

const router    						= require('express').Router();
const Volunteer 						= require('../models/volunteer');
const VolunteerOrganization = require('../models/volunteer_organization');
const bcrypt 							= require('bcryptjs');
const jwt								= require('jsonwebtoken');

//POST endpoint for logging in and generating authTokens
router.post('/', (req, res) => {
	let email = req.body.email;
	let password = req.body.password;
	Volunteer.findOne({'email': email})
		.then(volunteer => {
			if (!volunteer) {
				res.status(403).send({token: null});
			} else {
				bcrypt.compare(password, data.toString(), (err, result) => {
					if (result) {
						let token = jwt.sign({email: email}, 'unifykey');
						res.json({token: token});
					} else {
						res.status(403).send({token: null});
					}
				})
			}
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

module.exports = router;
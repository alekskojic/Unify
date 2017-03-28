const router = require('express').Router();
const VolunteerOrganization = require('../models/volunteer_organization');
const Position = require('../models/position');


//GET endpoint for getting all Volunteer Organization
router.get('/', (req, res) => {
  VolunteerOrganization.find({})
		.then(volunteerOrganization => {
			res.json(volunteerOrganization);
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//GET endpoint for getting a single Volunteer Organization
router.get('/:id', (req, res) => {
	VolunteerOrganization.findById(req.params.id)
		.then(volunteerOrganization => {
			res.json(volunteerOrganization);
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//GET endpoint for getting all positions from a Volunteer Organization
router.get(':id/positions', (req, res) => {
	VolunteerOrganization.findById(req.params.id)
		.then(volunteerOrganization => {
			res.json(volunteerOrganization.positions);
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

// GET endpoint for getting a certain postions from a volunteer organization
router.get('/:id/positions/:position_id', (req, res) => {
	VolunteerOrganization.findById(req.params.id)
		.then(volunteerOrganization => {
			const position = volunteerOrganization.positions.id(req.params.position_id);
			res.json(position);
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//POST endpoint for saving a new Volunteer Organization
router.post('/', (req, res) => {
	VolunteerOrganization(req.body).save()
		.then(volunteerOrganization => {
			res.json(volunteerOrganization);
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//POST endpoint for saving a new position from a Volunteer Organization
router.post('/:id/positions', (req, res) => {
	VolunteerOrganization.findById(req.params.id)
		.then(volunteerOrganization => {
			volunteerOrganization.positions.push(Position(req.body));
			volunteerOrganization.save()
				.then(volunteerOrganization => {
					res.json(volunteerOrganization.positions);
				})
				.catch(err => {
					res.status(500).send(err);
				})
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//PUT endpoint for updating volunteer organizations
router.put('/:id', (req, res) => {
	VolunteerOrganization.findByIdAndUpdate(req.params.id, req.body)
		.then(volunteerOrganization => {
			res.json(volunteerOrganization);
		})
		.catch(err => {
			res.status(500).send(err);
		})
})

//PUT endpoint for updating a position from an volunteer organizations
router.put('/:id/:position_id', (req, res) => {
	VolunteerOrganization.findById(req.params.id)
		.then(volunteerOrganization => {
			const position = volunteerOrganization.positions.id(req.params.position_id);
			for (let key in req.body) {
				position[key] = req.body[key];
			}
			volunteerOrganization.save()
				.then(volunteerOrganization => {
					res.json(volunteerOrganization.positions);
				})
				.catch(err => {
					res.status(500).send(err);
				})
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//DELETE endpoint for deleting a volunteer orgnization
router.delete('/:id', (req, res) => {
	VolunteerOrganization.findByIdAndRemove(req.params.id)
		.then(volunteerOrganization => {
			res.json(volunteerOrganization);
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//DELETE endpoint for deleting a position from a volunteer organization
router.delete('/:id/:position_id', (req, res) => {
	VolunteerOrganization.findById(req.params.id)
		.then(volunteerOrganization => {
			const position = volunteerOrganization.positions.id(req.params.position_id);
			position.remove();
			volunteerOrganization.save()
				.then(volunteerOrganization => {
					res.json(volunteerOrganization.positions);
				})
				.catch(err => {
					res.status(500).send(err);
				})
		})
});

module.exports = router;


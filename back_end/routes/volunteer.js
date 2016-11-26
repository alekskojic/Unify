const router = require('express').Router();
const Volunteer = require('../models/volunteers');

//GET endpoint to get all volunteers
router.get('/', (req, res) => {
	Volunteer.find({})
		.then(volunteers => {
			res.json(volunteers);
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//GET endpoint for getting a single volunteer
router.get('/:id', (req, res) => {
	Volunteer.findById(req.params.id)
		.then(volunteer => {
			res.json(volunteer);
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//POST endpoint for saving a new volunteer
router.post('/', (req, res) => {
	Volunteer(req.body).save()
		.then(volunteer => {
			res.json(volunteer);
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//PUT endpoint for updating volunteers
router.put('/:id', (req, res) => {
	Volunteer.findByIdAndUpdate(req.params.id, req.body)
		.then(car => {
			res.json(volunteer);
		})
		.catch(err => {
			res.status(500).send(err);
		})
});

//DELETE endpoint for deleting volunteers
router.delete('/:id', (req, res) => {
	Volunteer.findByIdAndRemove(req.params.id)
		.then(volunteer => {
			res.json(volunteer);
		})
		.catch(err => {
			res.status(500).send(err);
		})
})
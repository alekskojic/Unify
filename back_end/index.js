const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const volunteers_routes = require('./routes/volunteer');
const volunteer_organizations_routes = require('./routes/volunteer_organization');

app.use(express.static(__dirname + './../front_end/Unify/build'));

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

app.use('/api/volunteers', volunteers_routes);
app.use('/api/volunteer_organizations', volunteer_organizations_routes);

app.listen(PORT, () => {
	console.log(`Server Started on http://localhost:${PORT}`);
	console.log('Press CTRL + C to stop server');
});

const express 						 = require('express');
const bodyParser 					 = require('body-parser');
const jwt 							 = require('jsonwebtoken');
const mongoose 						 = require('mongoose');
const volunteers_routes 			 = require('./routes/volunteer');
const volunteer_organizations_routes = require('./routes/volunteer_organization');
const login_routes					 = require('./routes/login');
const app = express();
const PORT = process.env.PORT || 8080;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.static(__dirname + './../front_end/Unify/build'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//connect to mongoose
mongoose.connect('mongodb://alekskojic:Unify1@ds119728.mlab.com:19728/unifydatabase');

//console.log a successful connection or if there's an error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected to db at unifydatabase")
});

app.use('/api/volunteers', volunteers_routes);
app.use('/api/volunteer_organizations', volunteer_organizations_routes);
app.use('/api/login', login_routes);

app.listen(PORT, () => {
	console.log(`Server Started on http://localhost:${PORT}`);
	console.log('Press CTRL + C to stop server');
});

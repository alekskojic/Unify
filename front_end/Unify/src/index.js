import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import App from './App';
import About from './about';
import Contact from './contact';
import VolunteerRegistration from './volunteer_registration';
import OrganizationRegistration from './organization_registration';
import Registration from './registration'
import './index.css';



class Header extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>             
		)
	}
}

ReactDOM.render((
  <Router history={browserHistory}>
		<Route path="/" component={Header}>
			<IndexRoute component={App} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/registration" component={Registration} />
			<Route path="/volunteer_registration" component={VolunteerRegistration} />
			<Route path="/organization_registration" component={OrganizationRegistration} />
		</Route>
	</Router>
), document.getElementById('root'));

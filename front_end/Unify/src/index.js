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
				<div className="navigationBar">
					<Link to="/">
						<img className="logo" alt="Unify" src="./images/Unify_Logo.png"/>
					</Link>            
					<Link to="/"><div className="links homeRight">Home</div></Link>
					<Link to="/about"><div className="links aboutRight">About</div></Link>
					<Link to="/contact"><div className="links contactRight">Contact</div></Link>
				</div>
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
			<Route path="/registration" component={Registration}>
				<Route path="/volunteer_registration" component={VolunteerRegistration} />
				<Route path="/organization_registration" component={OrganizationRegistration} />
			</Route>
		</Route>
	</Router>
), document.getElementById('root'));

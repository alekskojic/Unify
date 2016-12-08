import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div className="navBar">
				<img className="logoFixed" src="/images/Unify_Logo.png"/>
				<span className="navBarLinks">Home</span>
				<span className="navBarLinks">About</span>
				<span className="navBarLinks">Contact</span>
			</div>
		)
	}
}

export default Navbar;
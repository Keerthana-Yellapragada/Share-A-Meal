import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul>
			<li>
				<NavLink exact to="/">Home</NavLink>
			</li>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
	);
}

// const App = () => {
// 	return ( <
// 		Navbar bg = "light"
// 		expand = "lg" >
// 		<
// 		Navbar.Brand href = "#home" > Navbar < /Navbar.Brand> <
// 		Navbar.Toggle aria - controls = "basic-navbar-nav" / >
// 		<
// 		Navbar.Collapse id = "basic-navbar-nav" >
// 		<
// 		Nav className = "mr-auto" >
// 		<
// 		Nav.Link href = "#home" > Home < /Nav.Link> <
// 		Nav.Link href = "#about" > About < /Nav.Link> <
// 		Nav.Link href = "#services" > Services < /Nav.Link> <
// 		Nav.Link href = "#contact" > Contact < /Nav.Link> <
// 		/Nav> <
// 		/Navbar.Collapse> <
// 		/Navbar>
// 	);
// };

export default Navigation;

import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


const Header = () => {

	return (
		<header className="header">
			<Link to="/" style={{textDecoration: "none"}}>
				<h1 className="header__title">
					MustSee
				</h1>
			</Link>
			<div className="header">
				<div className="headerLeft">
					<Link to="/popular-movies" style={{textDecoration: "none"}}>Popular</Link>
					<Link to="/" style={{textDecoration: "none"}}>Top Rated</Link>
					<Link to="/" style={{textDecoration: "none"}}>Upcoming</Link>
				</div>
			</div>
		</header>
	);

}

export default Header;
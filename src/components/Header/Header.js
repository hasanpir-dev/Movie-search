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
					<Link to="/movies/popular" style={{textDecoration: "none"}}>Popular</Link>
					<Link to="/movies/now_playing" style={{textDecoration: "none"}}>Now Playing</Link>
					<Link to="/movies/upcoming" style={{textDecoration: "none"}}>Upcoming</Link>
					<Link to="/movies/top_rated" style={{textDecoration: "none"}}>Top Rated</Link>
					<Link to="/search" style={{textDecoration: "none"}}>Search</Link>
				</div>
			</div>
		</header>
	);

}

export default Header;
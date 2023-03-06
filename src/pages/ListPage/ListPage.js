import React from 'react';
import './ListPage.css';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ListPage = () => {


	const movieFavorites = useSelector(store => store.reducerMovies.favorites)
	const listName = useSelector(store => store.reducerMovies.favlistName)

	return (
		<div className="list-page">
			<h1 className="list-page__title">My List: {listName}</h1>
			<ul>
				{movieFavorites.map((movie,) => {
					return (
						<li key={movie.id}>
							<Link to={`../movie/${movie.id}/`}
								  target="_blank">{movie.title} ({movie.release_date})</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);

}

export default ListPage;
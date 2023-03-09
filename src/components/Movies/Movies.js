import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import {useSelector} from "react-redux";

const Movies = () => {

	const list = useSelector(store => store.reducerMovies.searchedMovies)


	return (
		<ul className="movies">
			{list.map((movie) => (
				<li className="movies__item" key={movie.id}>
					<MovieItem {...movie} />
				</li>
			))}
		</ul>
	);

}

export default Movies;
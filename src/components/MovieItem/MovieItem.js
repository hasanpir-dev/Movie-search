import React from 'react';
import './MovieItem.css';
import {useDispatch} from "react-redux";
import {addToFav} from "../../redux/actions";

const MovieItem = (props) => {

	const {title, release_date, poster_path, overview, id, vote_average} = props;
	const poster = poster_path && `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
	const dispatch = useDispatch()
	console.log(props)

	const addFavorites = () => {
		dispatch(addToFav({title, release_date, poster_path, overview, id}))
	}

	return (
		<article className="movie-item">
			<img className="movie-item__poster" src={poster} alt={title}/>
			<div className="movie-item__info">
				<h3 className="movie-item__title">{title}&nbsp;({release_date})</h3>
				<p className="movie__rate">{vote_average.toFixed(2)}</p>
				<p>{overview}</p>
				<button type="button" className="movie-item__add-button" onClick={addFavorites}>Add to List</button>
			</div>
		</article>
	);

}

export default MovieItem;
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { FetchPopularMovies} from "../../redux/actions";
import './PopularMovies.css';

import MovieCard from "../../components/MovieCard/MovieCard";

const PopularMovies =()=> {

	const dispatch = useDispatch();
	const popularMovies = useSelector(store => store.reducerMovies.popularMovies);

	const [page, setPage] = useState(1)
	const [loading, setLaoding] = useState(true)

	const getPopular = () => {
		dispatch(FetchPopularMovies({page}))
	}

	const handleScroll = () => {
		if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
			setLaoding(true)
			setPage(prev => prev +1 )
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		};
	}, []);


	useEffect(() => {
		getPopular()
		setLaoding(false);
	},[page])



	return (
		<div className="movie__list">
			<h2 className="list__title">Popular Movies</h2>
			<div className="list__card">
			{popularMovies.map((movie,key) => (
				<div className="movies__item" key={movie.id}>
					<MovieCard {...movie} />
				</div>
			))}
				{loading ? <div>Laoding</div> : null}
		</div>
		</div>
	);

}
export default PopularMovies;
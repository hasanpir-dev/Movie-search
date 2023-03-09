import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchNowPlayingMovies, FetchPopularMovies, FetchTopRatedMovies, FetchUpcomingMovies } from "../../redux/actions";
import './MoviesPage.css';

import MovieCard from "../../components/MovieCard/MovieCard";
import { useParams } from "react-router-dom";

const MoviesPage = () => {

	const dispatch = useDispatch();
	const popularMovies = useSelector(store => store.reducerMovies.popularMovies);
	const nowPlayingMovies = useSelector(store => store.reducerMovies.nowPlayingMovies);
	const upcomingMovies = useSelector(store => store.reducerMovies.upcomingMovies);
	const topRatedMovies = useSelector(store => store.reducerMovies.topRatedMovies);
	const moviesTitle = useSelector(store => store.reducerMovies.moviesListTitle)

	let Movies;
	const { type } = useParams()
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(true)


	const handleScroll = () => {
		if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
			setLoading(true)
			setPage(prev => prev + 1)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		};
	}, []);

	const getPopular = useCallback(() => {
		dispatch(FetchPopularMovies({ page, type }));
	}, [dispatch, page, type]);

	const getNowPlaying = useCallback(() => {
		dispatch(FetchNowPlayingMovies({ page, type }));
	}, [dispatch, page, type]);

	const getUpcoming = useCallback(() => {
		dispatch(FetchUpcomingMovies({ page, type }));
	}, [dispatch, page, type]);

	const getTopRated = useCallback(() => {
		dispatch(FetchTopRatedMovies({ page, type }));
	}, [dispatch, page, type]);

	useEffect(() => {
		if (type === 'popular') {
			getPopular();
		} else if (type === 'now_playing') {
			getNowPlaying();
		} else if (type === 'upcoming') {
			getUpcoming();
		} else if (type === 'top_rated') {
			getTopRated();
		}
		setLoading(false);
	}, [getPopular, getNowPlaying, getUpcoming, getTopRated, type, page]);

	console.log('Loading')

	const renderMovies = () => {
		if (type === 'popular') {
			Movies = popularMovies;
		} else if (type === 'now_playing') {
			Movies = nowPlayingMovies;
		} else if (type === 'upcoming') {
			Movies = upcomingMovies;
		} else if (type === 'top_rated') {
			Movies = topRatedMovies;
		}

		return (
			Movies.map((movie) => (
				<div className="movies__item" key={movie.id}>
					<MovieCard {...movie} />
				</div>
			)))
	}


	return (
		<div className="movie__list">
			<h2 className="list__title">{moviesTitle}</h2>
			<div className="list__card">
				{renderMovies()}
				{loading ? <div>Loading</div> : null}
			</div>
		</div>
	);

}
export default MoviesPage;
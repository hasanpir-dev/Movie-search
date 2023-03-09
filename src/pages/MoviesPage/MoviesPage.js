import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FetchNowPlayingMovies, FetchPopularMovies, FetchTopRatedMovies, FetchUpcomingMovies} from "../../redux/actions";
import './MoviesPage.css';

import MovieCard from "../../components/MovieCard/MovieCard";
import {useParams} from "react-router-dom";

const MoviesPage =()=> {

	const dispatch = useDispatch();
	const popularMovies = useSelector(store => store.reducerMovies.popularMovies);
	const nowPlayingMovies = useSelector(store => store.reducerMovies.nowPlayingMovies);
	const upcomingMovies = useSelector(store => store.reducerMovies.upcomingMovies);
	const topRatedMovies = useSelector(store => store.reducerMovies.topRatedMovies);
	const moviesTitle = useSelector(store => store.reducerMovies.moviesListTitle)

	let Movies ;
	const {type} = useParams()
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(true)



	const getPopular = () => {
		dispatch(FetchPopularMovies({page, type}));
		return Movies = popularMovies;
	}

	const getNowPlaying = () => {
		dispatch(FetchNowPlayingMovies({page, type}))
	}

	const getUpcoming = () => {
		dispatch(FetchUpcomingMovies({page, type}))
	}

	const getTopRated = () => {
		dispatch(FetchTopRatedMovies({page, type}))
	}

	const handleScroll = () => {
		if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
			setLoading(true)
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
		if (type === 'popular') {
			getPopular()
		} else if (type === 'now_playing') {
			getNowPlaying()
		} else if (type === 'upcoming') {
			getUpcoming()
		} else if (type === 'top_rated') {
			getTopRated()
		}
		setLoading(false);
	},[page,type])

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
		 Movies.map((movie,index) => (
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
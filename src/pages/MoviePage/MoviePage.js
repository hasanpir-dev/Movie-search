import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import "./moviePage.css"

const MoviePage = () => {
	const [movie, setMovie] = useState({title: ''})
	const {id} = useParams()

	useEffect(() => {
		getData()
		window.scrollTo(0, 0)
	}, [])

	const getData = async () => {
		try {
			const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
			const data = await response.json()
			setMovie(data)
		} catch (error) {
			console.log(error)
		}

	}
	return (
		<>{movie.title ? (<div className="movie">
			<div className="movie__intro">
				<img className="movie__backdrop"
					 src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`}/>
			</div>
			<div className="movie__detail">
				<div className="movie__detailLeft">
					<div className="movie__posterBox">
						<img className="movie__poster"
							 src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}/>
					</div>
				</div>
				<div className="movie__detailRight">
					<div className="movie__detailRightTop">
						<div className="movie__name">{movie ? movie.original_title : ""}</div>
						<div className="movie__tagline">{movie ? movie.tagline : ""}</div>
						<div className="movie__rating">
							{movie ? movie.vote_average.toFixed(2) : ""}
							<span className="movie__voteCount">{movie ? "(" + movie.vote_count + ") votes" : ""}</span>
						</div>
						<div className="movie__runtime">{movie ? movie.runtime + " mins" : ""}</div>
						<div className="movie__releaseDate">{movie ? "Release date: " + movie.release_date : ""}</div>
						<div
							className="movie__releaseDate">{movie.production_countries.length > 0 ? "Country: " + movie.production_countries[0].name : ""}</div>
						<div className="movie__genres">
							{
								movie && movie.genres
									?
									movie.genres.map((genre, index) => (
										<span key={index} className="movie__genre" id={genre.id}>{genre.name}</span>
									))
									:
									""
							}
						</div>
					</div>
					<div className="movie__detailRightBottom">
						<div className="synopsisText">Overview</div>
						<div>{movie ? movie.overview : ""}</div>
					</div>

				</div>
			</div>
			<div className="movie__links">
				<div className="movie__heading">For more information</div>
				{
					movie && movie.homepage &&
					<a href={movie.homepage} target="_blank" style={{textDecoration: "none"}}><p><span
						className="movie__homeButton movie__Button">Movie Page</span></p></a>
				}
				{
					movie && movie.imdb_id && <a href={"https://www.imdb.com/title/" + movie.imdb_id} target="_blank"
												 style={{textDecoration: "none"}}><p><span
						className="movie__imdbButton movie__Button">IMDb</span></p></a>
				}
			</div>
			)
		</div>) : <p> Loading</p>}</>


	)
}

export default MoviePage;




import {
	ADD_TO_FAV,
	FAV_LIST_NAME,
	GET_FILM, GET_NOW_PLAYING_MOVIES,
	GET_POPULAR_MOVIES,
	GET_SEARCH, GET_TOP_RATED_MOVIES, GET_UPCOMING_MOVIES,
	REMOVE_FAV
} from "../actionTypes";
import { combineReducers } from "redux";

const ITITIAL_MOVIES = {
	searchedMovies: [],
	popularMovies: [],
	nowPlayingMovies: [],
	upcomingMovies: [],
	topRatedMovies: [],
	moviesListTitle: 'Loading...',
	favorites: [],
	movie: {},
	favlistName: ''
}

export const reducerMovies = (state = ITITIAL_MOVIES, action) => {
	switch (action.type) {
		case GET_SEARCH:
			return {
				...state,
				searchedMovies: action.payload.results
			}
		case GET_POPULAR_MOVIES:
			return {
				...state,
				popularMovies: [...state.popularMovies].find(movie => movie.id === action.payload.results[0].id) ? [...state.popularMovies] : [...state.popularMovies, ...action.payload.results],
				moviesListTitle: 'Popular Movies'
			}
		case GET_NOW_PLAYING_MOVIES:
			return {
				...state,
				nowPlayingMovies: [...state.nowPlayingMovies].find(movie => movie.id === action.payload.results[0].id) ? [...state.nowPlayingMovies] : [...state.nowPlayingMovies, ...action.payload.results],
				moviesListTitle: 'Now Playing'
			}
		case GET_UPCOMING_MOVIES:
			return {
				...state,
				upcomingMovies: [...state.upcomingMovies].find(movie => movie.id === action.payload.results[0].id) ? [...state.upcomingMovies] : [...state.upcomingMovies, ...action.payload.results],
				moviesListTitle: 'Upcoming Movies'
			}
		case GET_TOP_RATED_MOVIES:
			return {
				...state,
				topRatedMovies: [...state.topRatedMovies].find(movie => movie.id === action.payload.results[0].id) ? [...state.topRatedMovies] : [...state.topRatedMovies, ...action.payload.results],
				moviesListTitle: 'Top Rated Movies'
			}
		case ADD_TO_FAV:
			return {
				...state,
				favorites: [...state.favorites].find(movie => movie.id === action.payload.id) ? [...state.favorites] : [...state.favorites, action.payload]
			}
		case REMOVE_FAV:
			return {
				...state,
				favorites: [...state.favorites.filter(movie => movie.id !== action.payload.id)]
			}
		case GET_FILM:
			return {
				...state,
				movie: action.payload
			}
		case FAV_LIST_NAME:
			return {
				...state,
				favlistName: action.payload
			}
		default:
			return state
	}


}

const rootReducer = combineReducers({ reducerMovies });
export default rootReducer;
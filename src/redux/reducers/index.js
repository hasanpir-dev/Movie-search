import {ADD_TO_FAV, FAV_LIST_NAME, FETCH_DATA, GET_FILM, GET_SEARCH, REMOVE_FAV} from "../actionTypes";
import {combineReducers} from "redux";

const ITITIAL_MOVIES = {
	movies: [],
	favorites: [],
	movie: {},
	favlistName: ''
}

export const reducerMovies = (state = ITITIAL_MOVIES, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				movies: action.payload
			}
		case GET_SEARCH:
			return {
				...state,
				movies: action.payload.results
			}
		case ADD_TO_FAV:
			return {
				...state,
				favorites: [...state.favorites].find(movie => movie.id === action.payload.id) ? [...state.favorites] : [...state.favorites, action.payload]
			}
		case  REMOVE_FAV:
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

const rootReducer = combineReducers({reducerMovies});
export default rootReducer;
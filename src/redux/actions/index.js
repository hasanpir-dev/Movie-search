import {ADD_TO_FAV, FAV_LIST_NAME, GET_FILM, GET_POPULAR_MOVIES, GET_SEARCH, REMOVE_FAV} from "../actionTypes";
const API_KEY = "4f45520a6605dad8f874b1f6dea7b711"


export const fetchData = (title) => {
	return async (dispatch) => {
		try {

			const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`)
			const movies = await response.json()

			dispatch({
				type: GET_SEARCH,
				payload: await movies
			})


		} catch (error) {

			console.error(error, 'Please wait')

		}

	}

}

export const FetchFilm = ({id}) => {
	return async (dispatch) => {
		try {

			const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
			const movie = await response.json()

			dispatch({
				type: GET_FILM,
				payload: await movie
			})


		} catch (error) {

			console.error(error, 'Please wait')

		}

	}
}

export const FetchPopularMovies = ({page}) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
			const popularMovies = await response.json()
			dispatch({
				type: GET_POPULAR_MOVIES,
				payload: await popularMovies
			})
		} catch (error) {

		console.error(error, 'Please wait')

	}
	}
}

export const addToFav = (movie) => ({
	type: ADD_TO_FAV,
	payload: movie
});

export const removeFromFav = (movie) => ({
	type: REMOVE_FAV,
	payload: movie
})

export const favListName = (list) => ({
	type: FAV_LIST_NAME,
	payload: list
})
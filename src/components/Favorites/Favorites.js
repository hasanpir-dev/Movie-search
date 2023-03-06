import React, {useState} from 'react';
import './Favorites.css';
import {useDispatch, useSelector} from "react-redux";
import ListItem from "./ListItem";
import {Link, useNavigate} from "react-router-dom";
import {favListName} from "../../redux/actions";


const Favorites = () => {

	const [searchFav, setSearchFav] = useState('');
	const [showNav, setShowNav] = useState(false)

	const dispatch = useDispatch()

	const movieFavorites = useSelector(store => store.reducerMovies.favorites)

	const searchFavChangeHandler = (e) => {
		setSearchFav(e.target.value);
	}

	const favList = () => {
		setShowNav(true)
		dispatch(favListName(searchFav))

	}
	let isDisable = (movieFavorites.length > 0 && searchFav) ? false : true;

	return (
		<div className="favorites">
			<form>
				<input value={searchFav}
					   placeholder="Новый список"
					   className="favorites__name"
					   onChange={searchFavChangeHandler}
				/>
				<ul className="favorites__list">
					{movieFavorites.map((movie) => {
						return < ListItem key={movie.id} {...movie} />
					})}
				</ul>
				{!showNav ?
					<button onClick={favList} type="button" className="favorites__save" disabled={isDisable}>Save
						List</button>
					: <Link to={`/list/${searchFav}`}>Go to List: {searchFav}</Link>}
			</form>
		</div>
	);

}

export default Favorites;
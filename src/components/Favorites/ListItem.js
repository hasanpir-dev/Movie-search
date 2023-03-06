import React from "react";
import {useDispatch} from "react-redux";
import {FetchFilm, removeFromFav} from "../../redux/actions";
import {useNavigate} from "react-router-dom";


const ListItem = (props) => {

	const dispatch = useDispatch()

	const {title, release_date, id} = props;


	const removeFav = (e) => {
		e.preventDefault()
		dispatch(removeFromFav({id}))
	}

	const navigate = useNavigate()

	const goToFilm = () => {
		dispatch(FetchFilm({id}))
		navigate(`/movie/${id}`)
	}
	return <li className='favorites__list-item'><p onClick={goToFilm}>{title} ({release_date})</p>
		<button onClick={removeFav}>X</button>
	</li>

}
export default ListItem;
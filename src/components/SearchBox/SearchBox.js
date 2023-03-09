import React, {useState, useEffect} from 'react';
import './SearchBox.css';
import {useDispatch} from "react-redux";
import { fetchSearch} from "../../redux/actions";

const SearchBox = () => {

	const [searchLine, setSearchLine] = useState('');

	const dispatch = useDispatch()
	const searchLineChangeHandler = (e) => {
		setSearchLine(e.target.value);
	}

	const searchBoxSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(fetchSearch(searchLine))
		setSearchLine('')

	}

	return (
		<div className="search-box">
			<form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
				<label className="search-box__form-label">
					Search film by name:
					<input
						value={searchLine}
						type="text"
						className="search-box__form-input"
						placeholder="Example, Shawshank Redemption"
						onChange={searchLineChangeHandler}
					/>
				</label>
				<button
					type="submit"
					className="search-box__form-submit"
					onClick={searchBoxSubmitHandler}
					disabled={!searchLine}
				>
					Search
				</button>
			</form>
		</div>
	);

}

export default SearchBox;
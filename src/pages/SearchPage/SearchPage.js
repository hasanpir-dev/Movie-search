import React from 'react';
import './SearchPage.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

const SearchPage = () => {

	return (
		<div className="search-page">
			<main className="search-page__content">
				<section className="search-page__main-section">
					<div className="search-page__search-box">
						<SearchBox/>
					</div>
					<div className="search-page__movies">
						<Movies/>
					</div>
				</section>
				<aside className="search-page__favorites">
					<Favorites/>
				</aside>
			</main>
		</div>
	);

}

export default SearchPage;
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import ListPage from './pages/ListPage/ListPage';
import MoviePage from "./pages/MoviePage/MoviePage";

import './reset.css';
import './common.css';
import Header from "./components/Header/Header";
import MoviesPage from "./pages/MoviesPage/MoviesPage";


const App = () => {

    return (
      <div className="app">
          <Header/>
          <Routes>
              <Route path="/" element={<SearchPage/>} />
              <Route path="/list/:id" element={<ListPage/>} />
              <Route path="/movie/:id" element={<MoviePage/>} />
              <Route path="movies/:type" element={<MoviesPage/>} />
              <Route path="/popular/" element={<MoviesPage/>} />
              <Route path="/search/" element={<SearchPage/>} />
              <Route path="/*" element={<h1>Error Page</h1>}></Route>
          </Routes>

      </div>
    );

}

export default App;

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import MoviePage from "./pages/MoviePage/MoviePage";

import './reset.css';
import './common.css';
import Header from "./components/Header/Header";
import PopularMovies from "./pages/PopularMovies/PopularMovies";


const App = () => {

    return (
      <div className="app">
          <Header/>
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/list/:id" element={<ListPage/>} />
              <Route path="/movie/:id" element={<MoviePage/>} />
              <Route path="/movie/" element={<PopularMovies/>} />
              <Route path="/popular-movies/" element={<PopularMovies/>} />
          </Routes>

      </div>
    );

}

export default App;

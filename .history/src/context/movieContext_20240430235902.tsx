import React from 'react';
import { createContext } from 'vm';
import MovieList from '../components/movie-list';

interface MovieContextProps  {
children: ReactNod
}

const initialMovieState: MovieState = {
    movie: MovieList
}

const MovieContext = createContext( {state: initialMovieState, dispatch: () => {}});

const movieContext = ({children } : Reactjsc) => {
  return (
    <div>
      {children }
    </div>
  )
}

export default movieContext

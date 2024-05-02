import React, { ReactNode } from 'react';
import { createContext } from 'vm';
import MovieList from '../components/movie-list';

interface MovieContextProps  {
children: ReactNode
}

const initialMovieState: MovieState = {0000000000000000000000000000000000000000000000000000000000000000
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
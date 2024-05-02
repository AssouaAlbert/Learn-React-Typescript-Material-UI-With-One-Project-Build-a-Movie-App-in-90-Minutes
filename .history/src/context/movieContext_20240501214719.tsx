import React, { ReactNode } from 'react';
import { createContext } from 'vm';
import { MovieDataType } from '../assets/data';
import MovieList from '../components/movie-list';


interface MovieContextProps  {
children: ReactNode
}
interface MovieState {
    movies: MovieDataType
}
const initialMovieState: MovieState = {
    movies: MovieList
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

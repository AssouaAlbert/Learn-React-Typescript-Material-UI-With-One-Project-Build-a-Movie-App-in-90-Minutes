import React, { ReactNode } from 'react';
import { createContext } from 'vm';
import { moviesData } from '../assets/data';


interface MovieContextProps  {
children: ReactNode
}

const initialMovieState: MovieState = {
    movie: moviesData
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

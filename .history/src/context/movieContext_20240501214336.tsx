import React, { ReactNode } from 'react';
import { createContext } from 'vm';


interface MovieContextProps  {
children: ReactNode
}

const initialMovieState: MovieState = {
    movie: <MovieDataType></MovieDataType>
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
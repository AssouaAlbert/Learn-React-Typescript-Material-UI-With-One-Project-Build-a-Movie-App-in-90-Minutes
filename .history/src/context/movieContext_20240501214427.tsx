import React, { ReactNode } from 'react';
import { createContext } from 'vm';
import { MovieDataType } from '../assets/data';


interface MovieContextProps  {
children: ReactNode
}
interface
const initialMovieState: MovieState = {
    movie: MovieDataType
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

import React from 'react';
import { createContext } from 'vm';

const MovieContext = createContext( state: initialMovieState);

const movieContext = ({children } : Reactjsc) => {
  return (
    <div>
      {children }
    </div>
  )
}

export default movieContext

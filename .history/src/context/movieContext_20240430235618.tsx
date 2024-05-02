import React from 'react';
import { createContext } from 'vm';

const MovieContext = createContext( s{tate: initialMovieState, dispatch: () => {}});

const movieContext = ({children } : Reactjsc) => {
  return (
    <div>
      {children }
    </div>
  )
}

export default movieContext

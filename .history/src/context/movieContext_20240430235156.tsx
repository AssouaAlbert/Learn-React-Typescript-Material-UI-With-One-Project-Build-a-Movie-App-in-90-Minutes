import React from 'react';
import { createContext } from 'vm';

const MovieContext = createContext();

const movieContext = ({children: React }) => {
  return (
    <div>
      {children }
    </div>
  )
}

export default movieContext

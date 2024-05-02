import React from 'react';
import { createContext } from 'vm';

const MovieContext = createContext();

const movieContext = ({children: ReactCon }) => {
  return (
    <div>
      {children }
    </div>
  )
}

export default movieContext

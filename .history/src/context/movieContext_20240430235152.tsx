import React from 'react';
import { createContext } from 'vm';

const MovieContext = createContext();

const movieContext = ({children: ReactCom }) => {
  return (
    <div>
      {children }
    </div>
  )
}

export default movieContext

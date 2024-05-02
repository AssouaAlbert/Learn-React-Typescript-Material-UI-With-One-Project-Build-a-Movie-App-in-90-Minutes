import React from 'react';
import { createContext } from 'vm';

const MovieContext = createContext();

const movieContext = ({childrend}) => {
  return (
    <div>
      {childrend}
    </div>
  )
}

export default movieContext

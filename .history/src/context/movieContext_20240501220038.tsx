import React, { ReactNode } from 'react';
import { createContext } from 'vm';
import { MovieDataType, moviesData } from '../assets/data';



interface MovieContextProps {
    children: ReactNode
}
interface MovieState {
    movies: MovieDataType[]
}
interface MovieAction {
    type: string,
    id: string
}
const MovieList: MovieDataType[] = moviesData;
const initialMovieState: MovieState = {
    movies: MovieList
}

const MovieContext = createContext({ state: initialMovieState, dispatch: () => { } });

const movieContext = ({ children }: ReactNode) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default movieContext

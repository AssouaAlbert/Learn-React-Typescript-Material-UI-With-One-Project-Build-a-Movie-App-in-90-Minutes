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

export const MovieContext = createContext<{ state: MovieState, dispatch: React.Dispatch<MovieAction> }>({ state: initialMovieState, dispatch: () => { } });

const movieContext = ({ children }: MovieContextProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default movieContext

import React, { ReactNode, useReducer, createContext, useContext } from "react";

import { MovieDataType, moviesData } from "../assets/data";

interface MovieContextProps {
  children: ReactNode;
}
interface MovieState {
  movies: MovieDataType[];
}
interface MovieAction {
  type: string;
  id: string;
}

const MovieList: MovieDataType[] = moviesData;
const initialMovieState: MovieState = {
    movies: MovieList,
};
const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
    const { type } = action;
    switch (type) {
        case "TOOGLE BOOKMARK":
            return {
                ...state,
                movies: state.movies.map((movie) => {
                    if (action.id === movie.id) {
            return { ...movie, isBookmarked: !movie.isBookmarked };
          }
          return movie;
        }),
      };
    default:
        return state;
    }
};
interface MovieContextType {
    state: MovieState;
    dispatch: React.Dispatch<MovieAction>;
}


export const MovieContext = createContext<MovieContextType>({
    state: initialMovieState,
    dispatch: () => {},
});

const MovieProvider = ({ children }: any ) => {
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) {
      throw new Error('useMovieContext must be used within a MovieProvider');
    }
    return context;
  };

export default MovieProvider;

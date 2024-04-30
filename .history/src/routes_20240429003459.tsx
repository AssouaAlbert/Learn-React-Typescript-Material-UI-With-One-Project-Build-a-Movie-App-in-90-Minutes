import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error";
import Home from "./pages/home";
import Bookmark from "./pages/bookmark";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";

export default router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/bookmark",
        element: <Bookmark />,
        errorElement: <Error />
    },
    {
        path: "/movie",
        element: <Movie />,
        errorElement: <Error />
    },
    {
        path: "/tv-series",
        element: <TvSeries />,
        errorElement: <Error />
    },
]
)
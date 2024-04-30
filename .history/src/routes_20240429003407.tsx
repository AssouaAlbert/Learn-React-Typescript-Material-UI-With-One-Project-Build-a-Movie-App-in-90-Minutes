import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error";
import Home from "./pages/home";
import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
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
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/tv-series",
        element: <Home />,
        errorElement: <Error />
    },
]
)
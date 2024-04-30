import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error";
import Home from "./pages/home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/bookmark",
        element: <,
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
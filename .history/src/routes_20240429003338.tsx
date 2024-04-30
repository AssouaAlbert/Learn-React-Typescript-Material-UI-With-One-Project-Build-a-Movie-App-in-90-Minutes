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
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/moie",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
]
)
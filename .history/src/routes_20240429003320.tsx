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
        path: "/book",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/",
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
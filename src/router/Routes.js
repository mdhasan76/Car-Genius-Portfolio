import Main from "../layout/main/Main";
import Home from "../pages/homePage/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import LogIn from "../pages/singIn/LogIn";
import Register from "../pages/singIn/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])
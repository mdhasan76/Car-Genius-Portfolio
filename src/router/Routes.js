import Main from "../layout/main/Main";
import Home from "../pages/homePage/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import LogIn from "../pages/singIn/LogIn";
import Register from "../pages/singIn/Register";
import CheckOut from "../pages/checkOut/CheckOut";
import Orders from "../pages/orders/Orders";
import PrivateRoute from "./PrivateRoute";

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
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <CheckOut />
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders /></PrivateRoute>
            }
        ]
    }
])
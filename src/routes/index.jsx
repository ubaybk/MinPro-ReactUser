import Home from "../Page/Home";
import Login from "../Page/Login";

export const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    }
]
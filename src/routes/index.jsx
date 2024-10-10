import Home from "../Page/Home";
import Login from "../Page/Login";
import Menu from "../Page/Menu";
import ProtectedRoute from "../routes/ProtectedRoute"

export const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/menu',
        element: (
            <ProtectedRoute>
                <Menu/>
            </ProtectedRoute>
            
        ) 
    }
]
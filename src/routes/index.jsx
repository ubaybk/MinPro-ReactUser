import AddUser from "../Page/AddUser";
import Home from "../Page/Home";
import ListUser from "../Page/ListUser";
import Login from "../Page/Login";
import Menu from "../Page/Menu";
import Register from "../Page/Register";
import DetailUser from "../Page/DetailUser"
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
        path: '/register',
        element: <Register/>
    },
    {
        path: '/menu',
        element: (
            <ProtectedRoute>
                <Menu/>
            </ProtectedRoute>
            
        ) 
    },
    {
        path: '/adduser',
        element: (
            <ProtectedRoute>
                <AddUser/>
            </ProtectedRoute>
        ) 
    },
    {
        path: '/listuser',
        element: (
            <ProtectedRoute>
                <ListUser/>
            </ProtectedRoute>
        )
    },
    {
        path: '/detailuser/:id',
        element: (
            <ProtectedRoute>
                <DetailUser/>
            </ProtectedRoute>
        ) 
    }
]
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <div>Home</div>,
            },
            {
                path: 'profile',
                element: <div>Profile</div>
            }
        ]
    },
    {
        path: '/login',
        element: <div>Login</div>
    },
    {
        path: '/register',
        element: <div>Register</div>
    }
]);

export default router;
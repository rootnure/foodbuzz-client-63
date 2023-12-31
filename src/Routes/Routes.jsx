import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AllFood from "../pages/AllFood/AllFood";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import OrderNow from "../pages/OrderNow/OrderNow";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserLayout from "../Layout/UserLayout";
import Profile from "../pages/User/Profile";
import AddNew from "../pages/User/AddNew";
import MyFoods from "../pages/User/MYFoods";
import Orders from "../pages/User/Orders";
import PrivateRoute from "./PrivateRoute";
import ErrorLayout from "../Layout/ErrorLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorLayout></ErrorLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/allFood',
                element: <AllFood></AllFood>
            },
            {
                path: '/food/details/:id',
                element: <FoodDetails></FoodDetails>
            },
            {
                path: '/order-now/:id',
                element: <PrivateRoute><OrderNow></OrderNow></PrivateRoute>
                // loader: ({params}) => fetch(`api/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/user',
        element: <PrivateRoute><UserLayout></UserLayout></PrivateRoute>,
        children: [
            {
                index: true,
                element: <Profile></Profile>
            },
            {
                path: '/user/add-food',
                element: <AddNew></AddNew>
            },
            {
                path: '/user/my-foods',
                element: <MyFoods></MyFoods>
            },
            {
                path: '/user/my-orders',
                element: <Orders></Orders>
            }
        ]
    }
]);

export default router;
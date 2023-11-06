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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <div>Oops...</div>,
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
                element: <FoodDetails></FoodDetails>,
                // loader: ({params}) => fetch(`api/${params.id}`)
            },
            {
                path: '/order-now',
                element: <OrderNow></OrderNow>
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
        element: <UserLayout></UserLayout>,
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
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Pages/Root";

const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
    {
        path : "/",
        element : <Root />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/register",
                element : <Register />
            },
            {
                path : "/login",
                element : <Login />
            }
        ]
    }
])
export default router;
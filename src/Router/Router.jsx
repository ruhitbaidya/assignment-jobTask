import Home from "../Pages/Home";
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
            }
        ]
    }
])
export default router;
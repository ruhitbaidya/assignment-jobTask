import Root from "../Pages/Root";

const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
    {
        path : "/",
        element : <Root />
    }
])
export default router;
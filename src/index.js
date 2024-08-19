import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Home from './Pages/Home';
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import UserAuth from "./UserAuth/User_Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserAuth>
      <RouterProvider router={router}></RouterProvider>
    </UserAuth>
  </React.StrictMode>
);

reportWebVitals();

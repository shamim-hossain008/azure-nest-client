import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../../Layout/MainLayout";
import Home from "../../../pages/Home/Home/Home";
import Login from "../../../pages/Home/Login/Login";
import SignUp from "../../../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }, {}],
  },
  { path: "/login", element: <Login /> },
  { path: "/signUp", element: <SignUp /> },
]);

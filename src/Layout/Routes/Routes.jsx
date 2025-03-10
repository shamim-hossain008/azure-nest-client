import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/Error/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import MainLayout from "../MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Home /> }, {}],
  },
  { path: "/login", element: <Login /> },
  { path: "/signUp", element: <SignUp /> },
]);

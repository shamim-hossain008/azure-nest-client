import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/Error/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import RoomDetails from "../../pages/Home/Rooms/RoomDetails/RoomDetails";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import DashboardLayout from "../DashboardLayout";
import MainLayout from "../MainLayout";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />,
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signUp", element: <SignUp /> },

  //  Dashboard Layout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children:[]
  },
]);

import { createBrowserRouter } from "react-router-dom";
import ManageUsers from "../../pages/Dashboard/Admin/ManageUsers";
import Statistics from "../../pages/Dashboard/Common/Statistics";
import AddRoom from "../../pages/Dashboard/Host/AddRoom";
import ManageBookings from "../../pages/Dashboard/Host/ManageBookings";
import MyListings from "../../pages/Dashboard/Host/MyListings";
import ErrorPage from "../../pages/Error/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import RoomDetails from "../../pages/Home/Rooms/RoomDetails/RoomDetails";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile";
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
  {
    path: "/profile",
    element: <Profile />,
  },

  //  Dashboard Layout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Statistics />,
      },

      // Admin related route
      {
        path: "manage-users",
        element: <ManageUsers />,
      },

      // Host related route
      {
        path: "add-room",
        element: <AddRoom />,
      },
      { 
        path: "my-listings",
        element: <MyListings />,
      },
      {
        path: "manage-bookings",
        element: <ManageBookings />,
      },
    ],
  },
]);

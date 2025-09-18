import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";
import { PrivateRoute } from "./PrivateRoute";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage></AboutPage>
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<ProfilePage></ProfilePage>}></PrivateRoute>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "*",
    element: <Navigate to="/"></Navigate>
  },
]);
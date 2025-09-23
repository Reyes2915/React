import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./src/shop/layouts/ShopLayout";
import { HomePage } from "./src/shop/layouts/pages/home/HomePage";
import { ProductPage } from "./src/shop/layouts/pages/product/ProductPage";
import { GenderPage } from "./src/shop/layouts/pages/gender/GenderPage";
import { LoginPage } from "./src/auth/layouts/pages/login/LoginPage";
import { RegisterPage } from "./src/auth/layouts/pages/register/RegisterPage";
import { AdminDashboardPage } from "./src/admin/pages/dashboard/AdminDashboardPage";
import { AdminProductsPage } from "./src/admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./src/admin/pages/product/AdminProductPage";
import { lazy } from "react";


const AuthLayout=lazy(()=> import('./src/auth/layouts/AuthLayout'))
const AdminLayout=lazy(()=> import('./src/admin/layouts/AdminLayout'))



export const appRouter = createBrowserRouter([
  //Main routes

  {
    path: "/",
    element: <ShopLayout></ShopLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "product/:idSlug",
        element: <ProductPage></ProductPage>,
      },
      {
        path: "gender/:gender",
        element: <GenderPage></GenderPage>,
      },
    ],
  },

  //Auth routes
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login"></Navigate>,
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },

  //Admin routes
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <AdminDashboardPage></AdminDashboardPage>,
      },
      {
        path: "products",
        element: <AdminProductsPage></AdminProductsPage>,
      },
      {
        path: "product/:id",
        element: <AdminProductPage></AdminProductPage>,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/"></Navigate>,
  },
]);

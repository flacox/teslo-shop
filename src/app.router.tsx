import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

// Shop Modules
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";

// Auth Modules
// import { AuthLayout } from "./auth/layouts/AuthLayout";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";

// Admin Modules
// import { AdminLayout } from "./admin/layouts/AdminLayout";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProducts } from "./admin/pages/products/AdminProducts";
import { AdminProduct } from "./admin/pages/product/AdminProduct";

// lazy load
const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'))
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));

export const appRouter = createBrowserRouter([
    // Main Routes
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product/:idSlug',
        element: <ProductPage />,
      },
      {
        path: 'gender/:gender',
        element: <GenderPage />,
      },
    ]
  },
//   Auth Routes
{
    path: '/auth',
    element: <AuthLayout />,
    children: [
        {
            index: true,
            element: <Navigate to="/auth/login" />
        },
        {
            path: 'login',
            element: <LoginPage />
        },
        {
            path: 'register',
            element: <RegisterPage />
        },
    ]
},
// Admin Routes
{
    path: '/admin',
    element:<AdminLayout />,
    children: [
        {
            index: true,
            element: <DashboardPage />
        },
        {
            path: 'products',
            element: <AdminProducts />
        },
        {
            path: 'products/:id',
            element: <AdminProduct />
        }
    ]

},
// Fuera de ruta
{
    path: '*',
    element: <Navigate to='/' />
}
]);

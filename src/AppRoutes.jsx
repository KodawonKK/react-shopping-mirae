import React from "react";
import { useRoutes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AllProductPage from "./pages/AllProduct/AllProductPage";
import HomePage from "./pages/HomePage/HomePage";

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "all", element: <AllProductPage /> },
        { path: "product/:id", element: <ProductDetail /> }
      ]
    },
    { path: "*", element: <NotFoundPage /> }
  ]);

  return routes;
};

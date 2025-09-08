import React from "react";
import { useRoutes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <AppLayout /> },
    { path: "/product:id", element: <ProductDetail /> },
    { path: "*", element: <NotFoundPage /> }
  ]);
  return routes;
};

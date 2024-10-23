import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../src/App";
import Signup from "./pages/Signup/Signup";
import Storage  from "./pages/Storage/Storage";
import AddNew  from "./pages/AddNew/AddNew";
import EditPage  from "./pages/EditPage/EditPage";
import Login  from "./pages/Login/Login";

/* import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/storage",
    element: <Storage />,
  },
  {
    path: "/addNew",
    element: <AddNew />,
  },
  {
    path: "/edit",
    element: <EditPage />,
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
  console.error("Root element not found");
}

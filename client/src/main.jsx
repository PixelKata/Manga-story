import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Homepage";
import AllMangas from "./pages/AllMangas";

import "./styles/main.css";
import fetchManga from "./services/requestManga";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: fetchManga,
      },
      {
        path: "/all-mangas",
        element: <AllMangas />,
        loader: fetchManga,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

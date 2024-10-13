import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import App from "./App";
import Home from "./pages/Homepage";
import AllMangas from "./pages/AllMangas";
import MangaDescription from "./pages/MangaDescription";
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./styles/main.css";
import fetchManga from "./services/requestManga";
import fetchMangaAuthor from "./services/requestAuthorManga";

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
      {
        path: "/manga-description/:id",
        element: <MangaDescription />,
        loader: async ({ params }) => fetchMangaAuthor(params.id),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

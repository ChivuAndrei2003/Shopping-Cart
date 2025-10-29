//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./src/routes.jsx";
//import App from "./App.jsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <RouterProvider router = {router} />
);

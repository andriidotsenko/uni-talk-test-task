import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { HomePage } from "./pages/HomePage/HomePage.tsx";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

root.render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);

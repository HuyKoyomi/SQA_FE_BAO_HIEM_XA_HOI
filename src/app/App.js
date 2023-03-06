import React from "react";
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "../core/store/store";
import { router } from "./AppRoutes";

export function App() {
  return (
    // <BrowserRouter>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
    // </BrowserRouter>
  );
}

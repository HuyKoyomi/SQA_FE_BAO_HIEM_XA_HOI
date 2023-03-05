import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoutes";

export function App() {
  return <RouterProvider router={router} />;
}

import { createBrowserRouter, Link } from "react-router-dom";
import HomePageRouter from "../containers/homePage/HomePageRouter";
import LoginRouter from "../containers/login/LoginRouter";
export const router = createBrowserRouter([...LoginRouter, ...HomePageRouter]);

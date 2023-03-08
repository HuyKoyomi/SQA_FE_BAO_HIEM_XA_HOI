import { HomePage } from "../../components/home/views/HomePage";
import { Login } from "../../components/login/views/LoginPage";

const LoginRouter = [
  {
    path: "/",
    name: "Đăng nhập",
    element: <Login />,
  },
  {
    path: "/home",
    name: "Hệ thống",
    element: <HomePage />,
  },
];

export default LoginRouter;

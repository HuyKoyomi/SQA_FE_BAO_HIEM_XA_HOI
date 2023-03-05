import { createBrowserRouter, Link } from "react-router-dom";
import LoginRouter from "../containers/login/LoginRouter";
export const router = createBrowserRouter([...LoginRouter]);
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//         <Link to="about/about">About Us1</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//     children: [
//       {
//         path: "about/:id",
//         element: <div>About1</div>,
//       },
//     ],
//   },
// ]);

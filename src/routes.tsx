import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

export const publicRoutes = [
  {
    element: <SignUp />,
    path: "/signup",
  },
  {
    element: <SignIn />,
    path: "/signin",
  },
  {
    element: <Home />,
    path: "/home",
  },
];

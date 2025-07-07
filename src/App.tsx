import { Route, Routes } from "react-router";
import { publicRoutes } from "./routes";
import Layout from "./Layout";
import { Navigate } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route key={"*"} path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};

export default App;

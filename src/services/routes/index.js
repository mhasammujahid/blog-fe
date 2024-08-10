import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Create = lazy(() => import("../../screens/User/Create"));

const AppRoutes = () => (
  <Routes>
    <Route path="/user/create" element={<Create />} />
  </Routes>
);

export default AppRoutes;

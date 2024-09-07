import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../../screens/User/Login";
const Create = lazy(() => import("../../screens/User/Create"));

const AppRoutes = () => (
  <Routes>
    <Route index path="/" element={<Login />} />
    <Route path="/user/create" element={<Create />} />
    <Route path="/user/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;

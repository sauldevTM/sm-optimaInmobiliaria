import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import Home from "../pages/home/Home";
import LoginPage from "../pages/auth/LoginPage";

function AppRoutes() {
  const { isAuth } = useContext(AppContext);
  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/*" element={<Home />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to={"/login"} />} />
        </>
      )}
    </Routes>
  );
}

export default AppRoutes;

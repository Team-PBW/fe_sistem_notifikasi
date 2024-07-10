import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./context/authContext";
import Maps from "./pages/Maps";
// import App from "./App";
// import { EventProvider } from "./context/EventContext";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Base from "./pages/Base";
import Register from "./pages/Register";

const Root = () => {
  return (
    <Suspense>
        <Routes>
          {/* <AuthProvider> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Maps />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Register />} />
          <Route path="/dashboard" element={<Base />} />
          <Route path="/register" element={<Login />} />
          {/* </AuthProvider> */}
        </Routes>
    </Suspense>
  );
};

export default Root;

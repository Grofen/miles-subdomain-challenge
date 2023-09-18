import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import NotFound from "../pages/not-found";
import ProfilePage from "../pages/profile";
import AuthGuard from "./auth-guard";

const RoutesTable = () => (
  <div className="mt-[50px]">
    <Routes location={location}>
      <Route path="/" element={<AuthGuard component={HomePage} />} />
      <Route path="/profile" element={<AuthGuard component={ProfilePage} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default RoutesTable;

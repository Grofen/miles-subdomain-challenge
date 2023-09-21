import { Route, Routes } from "react-router-dom";
import AuthGuard from "./auth-guard";
import CaseStudyPage from "../pages/case-study";
import HomePage from "../pages/home";
import Logout from "pages/logout";
import NotFound from "../pages/not-found";
import ProfilePage from "../pages/profile";

const RoutesTable = () => (
  <Routes>
    <Route path="/" element={<AuthGuard component={HomePage} />} />
    <Route path="/profile" element={<AuthGuard component={ProfilePage} />} />
    <Route
      path="/case-study"
      element={<AuthGuard component={CaseStudyPage} />}
    />
    <Route path="/logout" element={<Logout />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default RoutesTable;

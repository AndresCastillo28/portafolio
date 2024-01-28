import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LandingPage } from "../landing/pages";
import { DashboardRouter } from "./DashboardRouter";
import { LoginPage } from "../auth/pages";
import { useAuthStore } from "../hooks";
import { NotFoundPage } from "../shared";
import { useEffect } from "react";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  // PrivateRoute component for authenticated routes
  const PrivateRoute = ({ element, ...rest }) => {
    return status === "authenticated" ? element : <Navigate to="/auth" />;
  };

  // PublicRoute component for public routes
  const PublicRoute = ({ element, ...rest }) => {
    return status !== "authenticated" ? element : <Navigate to="/dashboard" />;
  };

  return (
    <BrowserRouter>
      <div className="bg-blue-950 bg-no-repeat bg-cover overflow-hidden">
        <Routes>
          {/* Use PrivateRoute for the dashboard */}
          <Route
            path="/dashboard/*"
            element={<PrivateRoute element={<DashboardRouter />} />}
          />
          {/* Use PublicRoute for the login page */}
          <Route
            path="/auth"
            element={<PublicRoute element={<LoginPage />} />}
          />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

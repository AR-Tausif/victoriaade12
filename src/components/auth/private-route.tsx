import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { token, user } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!token || !user || user.role !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
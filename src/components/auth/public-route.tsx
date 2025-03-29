import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { token, user } = useAppSelector((state) => state.auth);

  if (token && user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

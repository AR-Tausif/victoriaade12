import { useAuthRedirect } from '../hooks/useAuthRedirect';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  useAuthRedirect();
  
  return <>{children}</>;
};
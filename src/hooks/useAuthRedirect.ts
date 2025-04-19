import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.token) {
      navigate('/login');
    }
  }, [auth.token, navigate]);
};
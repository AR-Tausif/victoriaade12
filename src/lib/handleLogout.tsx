import { ReactNode } from "react";
import { useAppDispatch } from "../redux/hooks";
import { logOut } from "../redux/features/auth.slice";

export const HandleLogOut = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return <div onClick={handleLogOut}>{children}</div>;
};

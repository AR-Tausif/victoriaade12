import  { ReactNode } from "react";
import BgImage from "../assets/bg-pics/bg-login.jpg";
export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};

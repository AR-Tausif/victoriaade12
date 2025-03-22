import { useLocation } from "react-router-dom";
import { ForgotPasswordForm, SetPasswordForm } from "../components/forms";

export const ForgotPassword = () => {
  const location = useLocation();

  // Parse the query params
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 8,
        maxWidth: 500,
        width: 400,
      }}
    >
      {token ? (
        <div className="">
          <h2
            style={{ textAlign: "center", fontWeight: 700, padding: "10px 0" }}
          >
            Reset Your Password
          </h2>
          <SetPasswordForm token={token} />
        </div>
      ) : (
        <div className="">
          <h2
            style={{ textAlign: "center", fontWeight: 700, padding: "10px 0" }}
          >
            Forgot Password
          </h2>
          <ForgotPasswordForm />
        </div>
      )}
    </div>
  );
};

import { createBrowserRouter } from "react-router-dom";
import {
  AccountDetails,
  AccountDetailsById,
  Dashboard,
  Login,
  Service,
} from "../pages";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/account-details",
        element: <AccountDetails />,
      },
      {
        path: "/account-details/:accountId",
        element: <AccountDetailsById />,
      },
      {
        path: "/service",
        element: <Service />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;

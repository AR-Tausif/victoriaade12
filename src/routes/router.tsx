import { createBrowserRouter } from "react-router-dom";
import {
  AccountDetails,
  AccountDetailsById,
  Dashboard,
  Login,
  ManageSubscription,
  Service,
} from "../pages";
import App from "../App";
import { Earning } from "../pages/earning";

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
      {
        path: "/earning",
        element: <Earning />,
      },
      {
        path: "/manage-subscription",
        element: <ManageSubscription />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;

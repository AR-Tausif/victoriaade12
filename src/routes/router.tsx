import { createBrowserRouter } from "react-router-dom";
import {
  AccountDetails,
  AccountDetailsById,
  Dashboard,
  DisputedReview,
  DisputedReviewById,
  Login,
  ManageSubscription,
  Notification,
  Profile,
  Service,
  Setting,
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
      {
        path: "/disputed-reviews",
        element: <DisputedReview />,
      },
      {
        path: "/disputed-reviews/:id",
        element: <DisputedReviewById />,
      },
      {
        path: "/settings",
        element: <Setting />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/notification",
        element: <Notification  />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;

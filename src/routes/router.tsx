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
  ForgotPassword,
  SetPassword,
} from "../pages";
import App from "../App";
import { Earning } from "../pages/earning";

import { AuthWrapper } from "../components/auth-wrapper";

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
        element: <Notification />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthWrapper>
        <Login />,
      </AuthWrapper>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <AuthWrapper>
        <ForgotPassword />,
      </AuthWrapper>
    ),
  },
  {
    path: "/set-password",
    element: (
      <AuthWrapper>
        <SetPassword />,
      </AuthWrapper>
    ),
  },
]);
export default router;

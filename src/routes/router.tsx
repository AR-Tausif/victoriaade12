import { createBrowserRouter } from "react-router-dom";
import {
  AccountDetails,
  AccountDetailsById,
  Dashboard,
  DisputedReview,
  DisputedReviewById,
  Login,
  Notification,
  Profile,
  Service,
  Setting,
  ForgotPassword,
  SetPassword,
  TermsOfUse,
  OfferReview,
} from "../pages";
import App from "../App";
import { AuthWrapper } from "../components/auth-wrapper";
import Demo from "../pages/demo";
import { PrivateRoute } from "../components";
import { PublicRoute } from "../components/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
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
        path: "/offer-review",
        element: <OfferReview />,
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
        path: "/privacy-policy",
        element: <Setting />,
      },
      {
        path: "/terms-use",
        element: <TermsOfUse />,
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
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <AuthWrapper>
          <Login />,
        </AuthWrapper>
      </PublicRoute>
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

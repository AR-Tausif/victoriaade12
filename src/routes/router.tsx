import { createBrowserRouter } from "react-router-dom";
import { AccountDetails, Dashboard } from "../pages";
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
    ],
  },
]);
export default router;

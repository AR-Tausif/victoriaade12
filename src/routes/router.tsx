import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages";
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
    ],
  },
]);
export default router;

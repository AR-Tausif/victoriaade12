import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          borderRadius:4
          // colorPrimary: "#FDFDFD",
          // colorBgContainer: "#A011FF",
        },
        hashed: false,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);

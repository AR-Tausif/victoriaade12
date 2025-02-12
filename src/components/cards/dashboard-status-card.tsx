import { Card } from "antd";

import { UserOutlined } from "@ant-design/icons";
export const DashboardStatusCard = () => {
  return (
    <Card style={{ background: "#A011FF", color: "#FDFDFD", border:"none" }}>
      <div className="" style={{ display: "flex", alignItems: "center" }}>
        <div
          className=""
          style={{
            width: "72px",
            height: 71,
            background: "#E6E6FA",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UserOutlined style={{ fontSize: 40, color: "#010101" }} />
        </div>
        <div style={{ marginLeft: 16 }}>
          <p style={{ fontWeight: 400, fontSize: 24, lineHeight: "28.8px" }}>
            Total User
          </p>
          <h3
            style={{ fontWeight: 600, fontSize: "32px", lineHeight: "38.4px" }}
          >
            218
          </h3>
        </div>
      </div>
    </Card>
  );
};

import { Col, Row } from "antd";
import {
  AccountDetailsTable,
  DashboardStatusCard,
  TableSkeleton,
} from "../components";
import "./styles/dashboard.css";
import { DollarCircleOutlined, UserOutlined } from "@ant-design/icons";
import "./styles/dashboard-tables.css";
import UserManagementChart from "../components/charts/stacked-chart";
import { useState } from "react";
import { useUsersQuery } from "../redux/api/account-details";

export const Dashboard = () => {
  const [roleType, setRoleType] = useState("");

  // RTK: retrieved an admin profile data from database
  const { data, isLoading, isFetching } = useUsersQuery({
    searchTerm: "",
    roleType,
    createdAt: "",
  });

  const handleAccountType = (e: string) => {
    console.log(e);
    setRoleType(e.trim());
  };
  return (
    <Row
      gutter={[0, 16]}
      className="dashboard"
      style={{ background: "#CACACA" }}
    >
      {/* dashboard-status-bar */}
      <Col span={24}>
        <Row gutter={[16, 16]} className="dashboard-status-bar">
          <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
            <DashboardStatusCard
              icon={<UserOutlined style={{ fontSize: 40, color: "#010101" }} />}
              title="Total Users"
              desc="218"
            />
          </Col>
          <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
            <DashboardStatusCard
              icon={
                <DollarCircleOutlined
                  style={{ fontSize: 40, color: "#010101" }}
                />
              }
              title="Total Earning"
              desc="$5,000"
            />
          </Col>
        </Row>
      </Col>

      {/* dashboard-chart-section */}
      <Col span={24}>
        <UserManagementChart />
      </Col>

      {/* dashboard-table-section */}
      <Col span={24}>
        {isLoading || isFetching ? (
          <TableSkeleton />
        ) : (
          <AccountDetailsTable
            data={data?.data?.data.slice(0, 4)}
            handleAccountType={handleAccountType}
          />
        )}
      </Col>
    </Row>
  );
};

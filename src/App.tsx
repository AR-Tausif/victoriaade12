import React, { useState } from "react";
import {
  BellOutlined,
  CrownOutlined,
  DollarOutlined,
  FileDoneOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ProductOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import "./app.css";
import { Logo } from "./components";
const sidebarItems = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Dashboard",
    path: "/dashboard", // Added path to the item
  },
  {
    key: "2",
    icon: <TeamOutlined />,
    label: "Accounts Details",
    path: "/account-details", // Added path to the item
  },
  {
    key: "3",
    icon: <ProductOutlined />,
    label: "Service",
    path: "/service", // Added path to the item
  },
  {
    key: "4",
    icon: <DollarOutlined />,
    label: "Earnings",
    path: "/earnings", // Added path to the item
  },
  {
    key: "5",
    icon: <CrownOutlined />,
    label: "Manage Subscription",
    path: "/subscription", // Added path to the item
  },
  {
    key: "6",
    icon: <FileDoneOutlined />,
    label: "Disputed Reviews",
    path: "/reviews", // Added path to the item
  },
  {
    key: "7",
    icon: <SettingOutlined />,
    label: "Setting",
    path: "/settings", // Added path to the item
  },
  {
    key: "8",
    icon: <LoginOutlined />,
    label: "Logout",
    path: "/logout", // Added path to the item
  },
];

const { Header, Sider, Content } = Layout;
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }} className="app-layout">
      <Sider
        className="app-sider"
        // breakpoint="lg"
        // collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          className="demo-logo-vertical"
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems.map((item) => ({
            ...item,
            label: (
              <Link to={item.path}>
                {" "}
                {/* Wrap label with Link component */}
                {item.label}
              </Link>
            ),
          }))}
        />
      </Sider>

      <Layout style={{ background: "#CACACA" }}>
        <Header
          style={{
            padding: "12px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // paddingRight: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <h2 style={{}}>Dashboard</h2>
          </div>
          <div
            className=""
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 25,
              }}
            >
              <div
                style={{ fontSize: 18, display: "flex", alignItems: "center" }}
              >
                <Badge count={5} offset={[0.1, 5]}>
                  {/* <Avatar shape="square" size="large" /> */}
                  <BellOutlined
                    style={{
                      border: "1px solid #efefef",
                      padding: "8px",
                      borderRadius: "50%",
                    }}
                  />
                </Badge>
              </div>
              <div>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                  size={40}
                />
              </div>
            </div>
            <p style={{ fontWeight: 600 }}>Natederwin</p>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#CACACA",
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

import React, { useState } from "react";
import {
  AppstoreOutlined,
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import "./App.css";

const { Header, Sider, Content } = Layout;
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div
          className="demo-logo-vertical"
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#fff",
            textAlign: "center",
          }}
        >
          VOUCHED
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <AppstoreOutlined />,
              label: "Accounts Details",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Service",
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "Earnings",
            },
            {
              key: "5",
              icon: <UploadOutlined />,
              label: "Manage Subscription",
            },
            {
              key: "6",
              icon: <UploadOutlined />,
              label: "Disputed Reviewws",
            },
            {
              key: "7",
              icon: <UploadOutlined />,
              label: "Setting",
            },
            {
              key: "8",
              icon: <UploadOutlined />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout style={{ background: "#CACACA" }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 16,
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
                gap: 8,
                background: "#efefef",
              }}
            >
              <div style={{ fontSize: 18 }}>
                <BellOutlined
                  style={{
                    padding: "7px",
                    border: "1px solid purple",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
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

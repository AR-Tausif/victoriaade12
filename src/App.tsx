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
import { Outlet } from "react-router-dom";
import "./App.css";
import { Logo } from "./components";
const sidebarItems = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <TeamOutlined />,
    label: "Accounts Details",
  },
  {
    key: "3",
    icon: <ProductOutlined />,
    label: "Service",
  },
  {
    key: "4",
    icon: <DollarOutlined />,
    label: "Earnings",
  },
  {
    key: "5",
    icon: <CrownOutlined />,
    label: "Manage Subscription",
  },
  {
    key: "6",
    icon: <FileDoneOutlined />,
    label: "Disputed Reviewws",
  },
  {
    key: "7",
    icon: <SettingOutlined />,
    label: "Setting",
  },
  {
    key: "8",
    icon: <LoginOutlined />,
    label: "Logout",
  },
];

const { Header, Sider, Content } = Layout;
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
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
          items={sidebarItems}
        />
        {/* <ul>
          {sidebarItems.map((item) => (
            <li
              key={item.key}
              className={`list-item ${selected ? generateSelectedClassName(item.key) : ""}`}
              id={item.key}
              onClick={(e)=>handleSelect(e)}
            >
              <p className="icon">{item.icon}</p>
              <p>{item.label}</p>
            </li>
          ))}
        </ul> */}
        {/* <Menu
          mode="vertical"
          selectedElementId={[selectedKeys]}
          onSelect={handleMouseSelectElement}
        >
          {sidebarItems.map((item) => (
            <Menu.Item
              key={item.key}
             
              className={generateSelectedClassName(item.key)}
            >
              <p>{item.label}</p>
              <p>{item.label}</p>
            </Menu.Item>
          ))}
        </Menu> */}
      </Sider>
      {/* <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
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
          items={sidebarItems}
        />
      </Sider> */}
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

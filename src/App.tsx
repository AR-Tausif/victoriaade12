import React, { useState } from "react";
import {
  BellOutlined,
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
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Flex,
  Layout,
  Menu,
  MenuProps,
  theme,
} from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./components";
import "./App.css";
import "./antd-overwrite.css";
import { HandleLogOut } from "./lib";
import { BadgePercent } from "lucide-react";
import { useAdminProfileQuery } from "./redux/api/profile.api";
import { useGetAllNotificationQuery } from "./redux/api/notification.api";

// Updated sidebarItems with proper nested structure
const sidebarItems = [
  {
    key: "/",
    icon: <PieChartOutlined />,
    label: "Dashboard",
    path: "/",
  },
  {
    key: "/account-details",
    icon: <TeamOutlined />,
    label: "Accounts Details",
    path: "/account-details",
  },
  {
    key: "/service",
    icon: <ProductOutlined />,
    label: "Services",
    path: "/service",
  },
  {
    key: "/offer-review",
    icon: <BadgePercent className="text-sm" />,
    label: "Offer Reviews",
    path: "/offer-review",
  },
  // {
  //   key: "/earning",
  //   icon: <DollarOutlined />,
  //   label: "Earnings",
  //   path: "/earning",
  // },
  // {
  //   key: "/manage-subscription",
  //   icon: <CrownOutlined />,
  //   label: "Manage Subscription",
  //   path: "/manage-subscription",
  // },
  {
    key: "/disputed-reviews",
    icon: <FileDoneOutlined />,
    label: "Disputed Reviews",
    path: "/disputed-reviews",
  },
  {
    key: "/Setting",
    icon: <SettingOutlined />,
    label: "Setting",
    children: [
      {
        key: "/privacy-policy",
        icon: <SettingOutlined />,
        label: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        key: "/terms-use",
        icon: <SettingOutlined />,
        label: "Terms of use",
        path: "/terms-use",
      },
    ],
  },
  {
    key: "logout",
    icon: <LoginOutlined />,
    label: "Logout",
    path: "",
    onClick: HandleLogOut,
  },
];

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // RTK: retrieved an admin profile data from database
  const { data: adminProfile, } =
    useAdminProfileQuery("");
  // RTK: retrieved notification data from database
  const { data: notification, isLoading: notificationLoading } =
    useGetAllNotificationQuery("");
  console.log({ adminProfile });

  // Function to recursively transform menu items
  const transformMenuItem = (item: any) => {
    const transformed = { ...item };

    if (item.path) {
      transformed.label = <Link to={item.path}>{item.label}</Link>;
    }

    if (item.children) {
      transformed.children = item.children.map(transformMenuItem);
    }

    return transformed;
  };

  const transformedSidebarItems = sidebarItems.map(transformMenuItem);

  const items: MenuProps["items"] = [
    {
      key: "user-profile-link",
      label: "Profile",
      icon: <UserOutlined />,
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      key: "user-settings-link",
      label: "Settings",
      icon: <SettingOutlined />,
      onClick: () => {
        navigate("/privacy-policy");
      },
    },
    {
      type: "divider",
    },
  ];

  // const requestPermission = async () => {
  //   console.log("Requesting permission...");
  //   const permission = await Notification.requestPermission();
  //   console.log({ permission });

  //   if (permission === "granted") {
  //     console.log("Notification permission granted.");
  //   } else if (permission === "denied") {
  //     alert("Notification permission denied!");
  //   }
  // };

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  return (
    <Layout style={{ minHeight: "100vh" }} className="app-layout">
      <Sider
        // collapsibles
        breakpoint="md"
        // width={320}
        collapsed={collapsed}
        style={{
          paddingInline: `${!collapsed ? "10px" : "4px"}`,
          paddingBlock: "30px",
          backgroundColor: "white",
          overflow: "auto",
        }}
        theme="light"
        onBreakpoint={(broken) => {
          console.log({ broken });
          setCollapsed(broken);
        }}
        onCollapse={() => {
          // console.log(collapsed, type);
        }}
        className={collapsed ? "" : "myClass"}
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
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={transformedSidebarItems}
        />
      </Sider>

      {/* Rest of your layout code remains the same */}
      <Layout>
        <Header
          className="flex justify-between items-center p-3 mr-5"
          style={{
            background: colorBgContainer,
          }}
        >
          <div className="flex items-center gap-3">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="text-2xl w-16 h-16"
            />
            <h2 className="text-xl font-bold text-gray-800 tracking-tighter">
              Dashboard
            </h2>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-5">
              <div className="flex items-center">
                <Link to="/notification">
                  <Badge
                    offset={[0.1, 5]}
                    count={notificationLoading ? 0 : notification?.data.length}
                  >
                    <BellOutlined className="border border-[#efefef] p-3 rounded-full " />
                  </Badge>
                </Link>
              </div>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <div className="flex justify-between items-center gap-3 hover:bg-blue-50 px-4 py-1 rounded-md transition-all duration-300">
                  <Flex>
                    <Avatar
                      src={
                        adminProfile?.data.profileImage
                          ? adminProfile?.data.profileImage
                          : "https://res.cloudinary.com/dyalzfwd4/image/upload/v1738207704/user_wwrref.png"
                      }
                      style={{ backgroundColor: "#87d068" }}
                      // icon={<UserOutlined />}
                      size={40}
                    />
                  </Flex>
                  <p className="text-lg font-semibold tracking-tighter">
                    {adminProfile?.data.firstName} {adminProfile?.data.surName}
                  </p>
                </div>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: "#CACACA",
            borderTopLeftRadius: 10,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

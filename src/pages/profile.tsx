import { Avatar, Badge, Tabs } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { ChangePasswordForm, ProfileEditForm } from "../components/forms";
import { PenLine } from "lucide-react";

export const Profile = () => {
  const tabsListArr = [
    {
      id: 1,
      text: "Edit Proifle",
      content: (
        <div>
          <h5
            style={{
              fontWeight: 600,
              fontSize: 18,
              textAlign: "center",
              margin: "10px 0",
            }}
          >
            Edit Your Profile
          </h5>
          <ProfileEditForm />
        </div>
      ),
    },
    {
      id: 2,
      text: "Change Password",
      content: (
        <div>
          <h5
            style={{
              fontWeight: 600,
              fontSize: 18,
              textAlign: "center",
              margin: "10px 0",
            }}
          >
            Change Your Password
          </h5>
          <ChangePasswordForm />
        </div>
      ),
    },
  ];
  return (
    <div
      style={{
        width: "80%",
        minHeight: "80vh",
        marginLeft: "auto",
        marginRight: "auto",
        background: "#fdfdfd",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          padding: 40,
          background: "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
          color: "#FDFDFD",
        }}
      >
        <Badge count={<p style={{
          
          background:"#fff", padding:3,
          borderRadius:"50%"
        }}> <PenLine size={16} stroke="#000" /> </p>} offset={[-15, 50]}>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s"
            size={64}
          />
        </Badge>
        <div>
          <h4>Victoria</h4>
          <p>Admin</p>
        </div>
      </div>

      {/* tabs */}
      <Tabs
        defaultActiveKey="1"
        centered
        items={tabsListArr.map((list) => {
          const id = String(list.id + 1);
          return {
            label: list.text,
            key: id,
            children: (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    maxWidth: 500,
                    width: 450,
                  }}
                >
                  {list.content}
                </div>
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

import { Table, Select, Avatar } from "antd";
import { EyeOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteActionButtons } from "../cards/delete-action-card";
import { AdminProfile } from "../../types/profile";
import { UserDetailsModal } from "../modals";

const { Option } = Select;
type TProps = {
  data?: AdminProfile[]; // Make data optional to handle undefined case
  handleAccountType: any;
};
export const DashboardTable = ({ data = [], handleAccountType }: TProps) => {
  const [deleteUser, setDeleteUser] = useState(false);
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [modalShowUser, setModalShowUser] = useState<AdminProfile | null>(null);

  // Transform the data for the table
  const tableData = data?.map((item, index) => ({
    key: item._id,
    serial: `#${(index + 1).toString().padStart(2, "0")}`, // Format serial as #01, #02, etc.
    firstName: `${item.firstName}`,
    email: item.email,
    role: item.role, // Adjust based on your role logic
    createdAt: new Date(item.createdAt).toLocaleDateString(),
    avatar: item.profileImage,
    record: item, // Pass the full record for use in render functions
  }));

  const handleUserShow = (record: (typeof tableData)[number]) => {
    const user = data?.find((item) => item._id === record.key);
    if (!user) return;
    setModalShowUser(user);
    setOpenAccountDetail(true);
  };

  const columns = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text: string, record: (typeof tableData)[number]) => (
        <div
          className="name-cell"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Avatar src={record.avatar} size={32}>
            {text.charAt(0).toUpperCase()}
          </Avatar>
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: (
        <div className="account-type-header">
          <span>Account Type</span>
          <Select
            onChange={(e) => handleAccountType(e)}
            className="account-type-filter"
          >
            <Option value="buyer">Buyer</Option>
            <Option value="seller">Seller</Option>
            <Option value="admin">Admin</Option>
          </Select>
        </div>
      ),
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: (typeof tableData)[number]) => (
        <div
          className="action-buttons"
          style={{ display: "flex", gap: "10px" }}
        >
          {["admin", "buyer"].includes(record.role.toLowerCase()) ? (
            <EyeOutlined
              className="view-icon"
              onClick={() => handleUserShow(record)}
              style={{ cursor: "pointer", color: "#1890ff" }}
            />
          ) : (
            <Link to={`/account-details/${record.key}`}>
              <EyeOutlined className="view-icon" style={{ color: "#1890ff" }} />
            </Link>
          )}
          <UserDeleteOutlined
            onClick={() => setDeleteUser(true)}
            className="delete-icon"
            style={{ cursor: "pointer", color: "#ff4d4f" }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="user-table-container">
      <Table
        columns={columns}
        dataSource={tableData}
        // pagination={true}
        className="custom-table"
      />
      <UserDetailsModal
        open={openAccountDetail}
        onClose={() => setOpenAccountDetail(false)}
        user={modalShowUser}
      />
      <DeleteActionButtons
        handleDelete={() => {}}
        open={deleteUser}
        onConfirm={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
      />
    </div>
  );
};

{
  /* <div style={styles.actionContainer}>
  <Link to="/account-details/12">
    <p style={styles.actionIcon}>
      <EyeInvisibleOutlined style={styles.icon} />
    </p>
  </Link>
  <p style={styles.actionIcon} onClick={() => setDeleteUser(true)}>
    <UserDeleteOutlined style={styles.deleteIcon} />
  </p>
</div> */
}

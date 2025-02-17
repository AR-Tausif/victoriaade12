import React, { useState } from "react";
import { Modal, Table, TableColumnsType } from "antd";
import { EyeInvisibleOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ProfileDetailsViewCard } from "../cards";
import { data, userArray } from "../../assets/data/data.account-details";
import { IUserDetails } from "../../types";
import { DeleteActionButtons } from "../cards/delete-action-card";

interface DataType {
  key: React.Key;
  serial: string;
  name: string;
  email: string;
  accountType: string;
  date: string;
  action: string;
}

export const EarningListTable = () => {
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [modalShowUser, setModalShowUser] = useState<IUserDetails | null>(null);

  const handleUserShow = (data: any) => {
    const user = userArray.find((user) => user.email === data.record.email);
    if (user) {
      setModalShowUser(user);
      setOpenAccountDetail(true);
    }
  };

  const columns: TableColumnsType<DataType> = [
    { title: "Serial", dataIndex: "serial", align: "center" },
    { title: "Name", dataIndex: "name", align: "center", render: renderName },
    { title: "Email", dataIndex: "email", align: "center" },
    { title: "Account Type", dataIndex: "accountType", align: "center" },
    { title: "Date", dataIndex: "date", align: "center" },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: renderActions,
    },
  ];

  return (
    <>
      <Table<DataType> columns={columns} dataSource={data} size="middle" />
      <DeleteActionButtons
        open={deleteUser}
        onConfirm={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
      />
      {openAccountDetail && modalShowUser && (
        <Modal
          centered
          open={openAccountDetail}
          onOk={() => setOpenAccountDetail(false)}
          onCancel={() => setOpenAccountDetail(false)}
        >
          <ProfileDetailsViewCard user={modalShowUser} isNoneClose />
        </Modal>
      )}
    </>
  );

  // Render functions should be defined after usage in the columns array.
  function renderName(text: string, record: DataType) {
    return (
      <div style={styles.flexCenter}>
        <img
          src="https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png"
          alt={record.name}
          style={styles.avatar}
        />
        <h4 style={styles.name}>{record.name}</h4>
      </div>
    );
  }

  function renderActions(text: string, record: DataType) {
    return (
      <div style={styles.actionContainer}>
        <p
          style={styles.actionIcon}
          onClick={() => handleUserShow({ text, record })}
        >
          <EyeInvisibleOutlined style={styles.icon} />
        </p>
      </div>
    );
  }
};

const styles = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    border: "1px solid #CACACA",
  },
  name: {
    marginLeft: 8,
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  actionIcon: {
    width: 24,
    height: 24,
    padding: 8,
    border: "1px solid #CACACA",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    color: "red",
  },
  icon: {
    color: "#010101",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "#A011FF",
    textAlign: "center" as const,
  },
};

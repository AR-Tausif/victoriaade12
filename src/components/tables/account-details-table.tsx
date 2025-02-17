import { Button, Modal, Table, TableColumnsType } from "antd";
import React, { useState } from "react";
import { EyeInvisibleOutlined, UserDeleteOutlined } from "@ant-design/icons";
import {
  data,
  DataType,
  userArray,
} from "../../assets/data/data.account-details";
import { ProfileDetailsViewCard } from "../cards";
import { IUserDetails } from "../../types";

export const AccountDetailsTable = () => {
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
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
      render: renderName,
    },
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
      <Table<DataType>
        columns={columns}
        dataSource={data}
        size="middle"
        style={styles.table}
      />
      <Modal
        centered
        open={openAccountDetail}
        onOk={() => setOpenAccountDetail(false)}
        onCancel={() => setOpenAccountDetail(false)}
      >
        <ProfileDetailsViewCard
          user={modalShowUser as IUserDetails}
          isNoneClose={true}
        />
      </Modal>
      <Modal
        centered
        open={deleteUser}
        onOk={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
        footer={null}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              textAlign: "center",
            }}
          >
            <h3 style={styles.modalTitle}>Are You Sure!</h3>
            <p>Do you want to delete this User?</p>
            <Button
              style={{
                backgroundImage:
                  "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
                color: "#fdfdfd",
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );

  // Render functions for name and actions
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
        <p style={styles.actionIcon} onClick={() => setDeleteUser(true)}>
          <UserDeleteOutlined style={styles.deleteIcon} />
        </p>
      </div>
    );
  }
};

// Style object
const styles = {
  table: {
    minHeight: "100vh",
  },
  flexCenter: {
    padding: "0 0 0 100px",
    display: "flex",
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
  icon: {
    color: "#010101",
  },
  deleteIcon: {
    color: "red",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "#A011FF",
    textAlign: "center" as const, // Explicitly declare textAlign type
  },
};

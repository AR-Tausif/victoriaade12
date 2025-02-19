import React, { useState } from "react";
import { Modal, Table, TableColumnsType } from "antd";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { ProfileDetailsViewCard } from "../cards";
import {
  accountDetailData,
  userArray,
} from "../../assets/data/data.account-details";
import { IUserDetails } from "../../types";
import { DeleteActionButtons } from "../cards/delete-action-card";

export interface AccDetailsDataType {
  key: React.Key;
  serial: string;
  name?: string;
  email?: string;
  subscriptionType: string;
  purchaseDate: string;
  amount: number;
  action: string;
}

export const EarningListTable = () => {
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [modalShowUser, setModalShowUser] = useState<IUserDetails | null>(null);

  const handleUserShow = (data: any) => {
    console.log("hello");

    const user = userArray.find((user) => user.email === data.record.email);
    console.log({ userArray });

    if (user) {
      setModalShowUser(user);
    }
    setOpenAccountDetail(true);
  };

  const columns: TableColumnsType<AccDetailsDataType> = [
    { title: "Serial", dataIndex: "serial", align: "center" },
    { title: "Name", dataIndex: "name", align: "center", render: renderName },
    { title: "Subscription", dataIndex: "subscriptionType", align: "center" },
    { title: "Purchase Date", dataIndex: "purchaseDate", align: "center" },
    { title: "Amount", dataIndex: "amount", align: "center" },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (text: string, record: AccDetailsDataType) =>
        renderActions(text, record),
    },
  ];
  console.log({ accountDetailData });

  return (
    <>
      <Table<AccDetailsDataType>
        columns={columns}
        dataSource={accountDetailData}
        size="middle"
      />
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
          footer={null}
        >
          <ProfileDetailsViewCard user={modalShowUser} isNoneClose />
        </Modal>
      )}
    </>
  );

  // Render functions should be defined after usage in the columns array.
  function renderName(text: string, record: AccDetailsDataType) {
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

  function renderActions(text: string, record: AccDetailsDataType) {
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

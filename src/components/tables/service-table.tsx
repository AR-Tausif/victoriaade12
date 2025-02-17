import { Modal, Table, TableColumnsType } from "antd";
import React, { useState } from "react";
import { EyeInvisibleOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { serviceData, DataType } from "../../assets/data/data.account-details";

export const ServiceListTable = () => {
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
    },
    {
      title: "Image",
      dataIndex: "image",
      align: "center",
      render: (text: string, record: DataType) => (
        <div style={styles.imageContainer}>
          <img
            src="https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png"
            alt={record.name}
            style={styles.image}
          />
        </div>
      ),
    },
    {
      title: "Service Name",
      dataIndex: "serviceName",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (status) => (
        <div style={styles.statusContainer}>
          <div style={styles.statusBadge}>{status}</div>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (text: string, record: DataType) => (
        <div style={styles.actionContainer}>
          <p style={styles.actionIcon} onClick={() => setOpenAccountDetail(true)}>
            <EyeInvisibleOutlined style={styles.icon} />
          </p>
          <p style={styles.actionIcon} onClick={() => setDeleteUser(true)}>
            <UserDeleteOutlined style={styles.iconDelete} />
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={serviceData}
        size="middle"
        style={styles.table}
      />
      <Modal
        title="Service Details"
        centered
        open={openAccountDetail}
        onOk={() => setOpenAccountDetail(false)}
        onCancel={() => setOpenAccountDetail(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      <Modal
        centered
        open={deleteUser}
        onOk={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
      >
        <h3 style={styles.modalTitle}>Are You Sure?</h3>
      </Modal>
    </>
  );
};

// Style object
const styles = {
  table: {
    minHeight: "100vh",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: 100,
    border: "1px solid #CACACA",
  },
  statusContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statusBadge: {
    background: "#D6FEEB7D",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #498A6C",
    color: "#498A6C",
    fontWeight: 700,
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
    cursor: "pointer",
  },
  icon: {
    color: "#010101",
  },
  iconDelete: {
    color: "red",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "#A011FF",
    textAlign: "center" as const,
  },
};

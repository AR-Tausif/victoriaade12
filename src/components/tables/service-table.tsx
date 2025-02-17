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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png"
            alt={record.name}
            style={{
              maxWidth: 100,
              border: "1px solid #CACACA",
            }}
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
      render: (s) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="" style={{ background: "#D6FEEB7D", padding:"8px 12px", borderRadius:"8px", border:"1px solid #498A6C ", color:"#498A6C0", fontWeight:700}}>
            {s}
          </div>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <p
            style={{
              width: 24,
              height: 24,
              padding: 8,
              border: "1px solid #CACACA",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setOpenAccountDetail(true)}
          >
            <EyeInvisibleOutlined style={{ color: "#010101" }} />
          </p>
          <p
            style={{
              width: 24,
              height: 24,
              padding: 5,
              border: "1px solid #CACACA",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setDeleteUser(true)}
          >
            <UserDeleteOutlined style={{ color: "red" }} />
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
        style={{
          minHeight: "100vh",
        }}
      />
      <Modal
        title="Vertically centered modal dialog"
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
        <h3
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#A011FF",
            textAlign: "center",
          }}
        >
          Are You Sure?
        </h3>
      </Modal>
    </>
  );
};

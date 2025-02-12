import { Table, TableColumnsType } from "antd";
import React from "react";

export const DashboardTable = () => {
  interface DataType {
    key: React.Key;
    serial: string;
    name: string;
    email: string;
    accountType: string;
    date: string;
    Action: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
    },
    {
        title: "Name",
        dataIndex: "name",
        align: "center",
        render: (text: string, record: DataType) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png" alt={record.name} style={{ width: 30, height: 30, borderRadius: "50%" }} />
            <h4 style={{ marginLeft: 8 }}>{record.name}</h4>
          </div>
        ),
      },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "Account Type",
      dataIndex: "accountType",
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "date",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "Action",
      align: "center",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      serial: "#01",
      name: "John Brown",
      email: "tausif.ritu1@gmail.com",
      accountType: "Service Provider",
      date: "2021-10-10",
      Action: "Edit",
    },
    {
      key: "2",
      serial: "#02",
      name: "John Brown",
      email: "tausif.ritu1@gmail.com",
      accountType: "User",
      date: "2021-10-10",
      Action: "Edit",
    },
    {
      key: "3",
      serial: "#01",
      name: "John Brown",
      email: "tausif.ritu1@gmail.com",
      accountType: "Service Provider",
      date: "2021-10-10",
      Action: "Edit",
    },
  ];
  return (
    <Table<DataType>
      columns={columns}
      dataSource={data}
      size="middle"
      pagination={false}
    />
  );
};

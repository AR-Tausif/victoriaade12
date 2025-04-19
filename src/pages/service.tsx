import { PlusCircleOutlined } from "@ant-design/icons";
import { Form, Input, Modal, Select } from "antd";
import {
  CreateServiceCard,
  ServiceListTable,
  TableSkeleton,
} from "../components";
import { Option } from "antd/es/mentions";
import { useState } from "react";
import { months } from "../assets/data";
import { useGetAllCategoriesQuery } from "../redux/api/service.api";

export const Service = () => {
  const [openResponsive, setOpenResponsive] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [serviceId, setServiceId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [form] = Form.useForm();
  const { data, isLoading } = useGetAllCategoriesQuery({
    searchTerm,
    createdAt,
  });
  // Handle search input
  const handleSearch = (e: any) => {
    const value = e.target.value.trim();
    setSearchTerm(value);
  };

  // Handle month selection
  const handleMonthSelect = (value: string) => {
    const monthIndex = months.indexOf(value) + 1;
    const currentYear = new Date().getFullYear();
    const monthString = monthIndex < 10 ? `0${monthIndex}` : monthIndex;
    const dateString = `${currentYear}-${monthString}`;
    setCreatedAt(dateString);
  };

  return (
    <div style={styles.container}>
      <div style={styles.addButton} onClick={() => setOpenResponsive(true)}>
        <PlusCircleOutlined style={styles.icon} />
        <p>Add new service</p>
      </div>
      <div>
        <h2 style={styles.title}>Service List</h2>
        <Form form={form} name="login" style={styles.form} scrollToFirstError>
          <Form.Item name="month" style={styles.formItem}>
            <Select placeholder="This Month" onChange={handleMonthSelect}>
              {months.map((month) => (
                <Option key={month} value={month}>
                  {month}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="search_user" style={styles.formItem}>
            <Input
              placeholder="Search Service"
              onChange={handleSearch}
              onPressEnter={handleSearch}
            />
          </Form.Item>
        </Form>
      </div>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <ServiceListTable
          serviceData={data?.data?.result}
          deleteUser={deleteUser}
          setDeleteUser={setDeleteUser}
          serviceId={serviceId}
          setServiceId={setServiceId}
        />
      )}
      <Modal
        centered
        open={openResponsive}
        onOk={() => setOpenResponsive(false)}
        onCancel={() => setOpenResponsive(false)}
        width={styles.modalWidth}
        footer={null}
      >
        <CreateServiceCard onClose={setOpenResponsive} />
      </Modal>
    </div>
  );
};

// Style object
const styles = {
  container: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "10px",
  },
  addButton: {
    background: "#A011FF",
    width: "100%",
    padding: "13px 30px",
    color: "#FDFDFD",
    fontWeight: 600,
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 8,
  },
  icon: {
    color: "#FDFDFD",
    fontSize: 37,
  },
  title: {
    fontWeight: 500,
    textAlign: "center" as const, // Explicitly declare textAlign type
    margin: "15px 0",
  },
  form: {
    maxWidth: "100%",
    display: "flex",
    gap: 16,
  },
  formItem: {
    width: "100%",
  },
  modalWidth: {
    xs: "90%",
    sm: "80%",
    md: "70%",
    lg: "60%",
    xl: "50%",
    xxl: "40%",
  },
};

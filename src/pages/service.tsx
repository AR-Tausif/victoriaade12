import { PlusCircleOutlined } from "@ant-design/icons";
import { Form, Input, Modal, Select } from "antd";
import { CreateServiceCard, ServiceListTable } from "../components";
import { Option } from "antd/es/mentions";
import { ServiceUploadForm } from "../components/forms/service-upload-form";
import { ServiceUploadBox } from "../components/boxes/service-upload-box";
import { useState } from "react";
export const Service = () => {
  const [openResponsive, setOpenResponsive] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
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
        }}
        onClick={() => setOpenResponsive(true)}
      >
        <p>
          <PlusCircleOutlined style={{ color: "#FDFDFD", fontSize: 37 }} />
        </p>
        <p> Add new service</p>
      </div>
      <div className="">
        <h2 style={{ fontWeight: 500, textAlign: "center", margin: "15px 0" }}>
          Service List
        </h2>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          style={{ maxWidth: "100%", display: "flex", gap: 16 }}
          scrollToFirstError
        >
          <Form.Item name="month" style={{ width: "100%" }}>
            <Select placeholder="This Month">
              <Option value="january">Male</Option>
              <Option value="fabruary">Female</Option>
              <Option value="march">March</Option>
              <Option value="othrer">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="search_user"
            style={{ width: "100%" }}
            className="success"
          >
            <Input placeholder="Search User" />
          </Form.Item>
        </Form>
      </div>
      <ServiceListTable />

      <Modal
        centered
        open={openResponsive}
        onOk={() => setOpenResponsive(false)}
        onCancel={() => setOpenResponsive(false)}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
      >
        <CreateServiceCard/>
      </Modal>
    </div>
  );
};



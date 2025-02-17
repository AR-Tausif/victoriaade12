import React from "react";
import { Button, Form, Input, message, Select, Space } from "antd";
import { Option } from "antd/es/mentions";

export const ServiceViewForm = ({
  serviceName="",
  status="",
  image="",
}: {
  serviceName: string;
  status: string;
  image?: string;
}) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onFill = () => {
    form.setFieldsValue({
      url: "https://taobao.com/",
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="serviceName"
        label="Service Name"
        rules={[{ type: "string", min: 6 }]}
      >
        <Input placeholder="input placeholder" defaultValue={serviceName} />
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[{ message: "Please select status!" }]}
      >
        <Select placeholder="select status" defaultValue={status}>
          <Option value="active">Active</Option>
          <Option value="inactive">In Active</Option>
        </Select>
      </Form.Item>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          //   alignItems: "center",
        }}
      >
        <Form.Item style={{ width: "100%" }}>
          <Button
            htmlType="submit"
            style={{
              width: "100%",
              background:
                "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
                color:"#FDFDFD"
            }}
          >
            Update
          </Button>
        </Form.Item>
        <Form.Item style={{ width: "100%" }}>
          <Button style={{ width: "100%" }}>Delete</Button>
        </Form.Item>
      </div>
    </Form>
  );
};

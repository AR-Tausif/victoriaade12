import React from "react";
import { Button, Form, Input, message, Select, Space } from "antd";
import { Option } from "antd/es/mentions";

export const ServiceUploadForm: React.FC = () => {
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
      <Form.Item name="url" label="URL" rules={[{ type: "string", min: 6 }]}>
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[{ message: "Please select status!" }]}
      >
        <Select placeholder="select status">
          <Option value="active">Active</Option>
          <Option value="inactive">In Active</Option>
        </Select>
      </Form.Item>
      <Form.Item>
 
          <Button type="primary" htmlType="submit" style={{width:"100%"}}>
            Submit
          </Button>

      </Form.Item>
    </Form>
  );
};

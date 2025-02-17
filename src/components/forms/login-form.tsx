import React from "react";
import {
  Button,
  Checkbox,
  CheckboxProps,
  Form,
  Input,
  message,
  Select,
  Space,
} from "antd";
import { Option } from "antd/es/mentions";

export const LoginForm: React.FC = () => {
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

  const onCheckboxRememberChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
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
        name="email"
        label="Email or Username"
        rules={[{ type: "string", min: 3 }]}
      >
        <Input placeholder="Enter your email or username" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ type: "string", min: 4 }]}
      >
        <Input placeholder="Enter your password" />
      </Form.Item>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Form.Item name="remember_me" rules={[{ type: "string", min: 4 }]}>
          <Checkbox onChange={onCheckboxRememberChange}>Checkbox</Checkbox>
        </Form.Item>
        <p>Forgot Password</p>
      </div>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", background: "#9D0DFE" }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

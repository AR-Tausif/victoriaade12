import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined } from "@ant-design/icons";

export const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [showPass, setShowPass] = useState(false);
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

  const handleShwingPassword = () => {
    setShowPass(!showPass);
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
        <Input
          type={showPass ? "text" : "password"}
          placeholder="Enter your password"
          addonAfter={
            <EyeInvisibleOutlined onClick={() => handleShwingPassword()} />
          }
        />
      </Form.Item>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Form.Item name="remember_me" rules={[{ type: "string", min: 4 }]}>
          <Checkbox onChange={onCheckboxRememberChange}>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Link to="/forgot-password">
            <p>Forgot Password</p>
          </Link>
        </Form.Item>
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

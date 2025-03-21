import React, { useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxProps,
  Form,
  Input,
  message,
  notification,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { useLoginMutation } from "../../redux/api/auth.api";
import { generateFCMToken } from "../../utils";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth.slice";
import { Loader2 } from "lucide-react";

type TLoginInfo = {
  email: string;
  password: string;
  fcmToken: string;
};
export const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [showPass, setShowPass] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const [login, { data, error, isLoading }] = useLoginMutation();

  const navigate = useNavigate();

  const openNotification = async (msg: string) => {
    api.open({
      message: "Service Updated succesfully",
      description: (
        <pre>
          <code>{msg}</code>
        </pre>
      ),
      duration: 2,
    });
  };
  const onFinish = async (values: Record<string, unknown>) => {
    try {
      // generate fcm token here
      const fcmToken = await generateFCMToken();
      const loginInfo: TLoginInfo = {
        email: values.email as string,
        password: values.password as string,
        fcmToken,
      };
      console.log(loginInfo);

      const loginResponse: any = await login(loginInfo).unwrap();
      console.log(loginResponse);

      openNotification(
        loginResponse.message
          ? loginResponse.message
          : "user login successfully!"
      );
      navigate("/")
    } catch (error: any) {
      console.log(error);

      openNotification(
        error.data.message ? error.data.message : "Something wen wrong!"
      );
    }
    // console.log("Received values of form: ", values);
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onCheckboxRememberChange: CheckboxProps["onChange"] = () => {};

  const handleShwingPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="email" label="Email or Username">
          <Input type="email" placeholder="Enter your email or username" />
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
          {isLoading ? (
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", background: "#9D0DFE" }}
              disabled
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", background: "#9D0DFE" }}
            >
              Submit
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

import React, { useState } from "react";
import { Button, Checkbox, CheckboxProps, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { useLoginMutation } from "../../redux/api/auth.api";
import { Loader2 } from "lucide-react";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth.slice";
import { VerifyToken } from "../../utils/verify-token";
import { toast } from "sonner";
import { TLoginBody } from "../../types/auth.type";

export const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [showPass, setShowPass] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: Record<string, unknown>) => {
    // const fcmToken = await generateFCMToken();

    try {
      console.log("start");
      // generate fcm token here
      const loginInfo: TLoginBody = {
        email: values.email as string,
        password: values.password as string,
        // TODO: fcm token cleared from here
        // fcmToken: fcmToken ? fcmToken : "",
      };

      const loginResponse: any = await login(loginInfo).unwrap();

      const user = VerifyToken(loginResponse.data.accessToken);
      dispatch(setUser({ user, token: loginResponse.data.accessToken }));
      toast.success(
        loginResponse.data.message
          ? loginResponse.data.message
          : "successfully logged in"
      );
      navigate("/");
    } catch (error: any) {
      toast.error(
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

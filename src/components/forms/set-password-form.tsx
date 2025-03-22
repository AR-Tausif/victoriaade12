import { Form, Input, notification } from "antd";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../primary-button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../redux/api/auth.api";
import { VerifyToken } from "../../utils/verify-token";
import { JwtPayload } from "jwt-decode";
import { TResetPassword } from "../../types/auth.type";

type TProps = {
  token: string;
};
export const SetPasswordForm = ({ token }: TProps) => {
  const [form] = Form.useForm();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const navigate = useNavigate();
  const handleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const [api, contextHolder] = notification.useNotification();
  const decodedToken = VerifyToken(token) as { email: string };
  const openNotification = async (data: Record<string, unknown>) => {
    const resetInfo: TResetPassword = {
      email: decodedToken.email,
      confirmPassword: data.confirmPassword as string,
      newPassword: data.newPassword as string,
    };
    // reseting password with api endpint
    const loginResponse: any = await resetPassword(resetInfo).unwrap();

    // TODO: replace the ant design notification to 'toast' notification
    api.open({
      message: loginResponse.data.message,
      description: <h2>Password Changed</h2>,
      duration: 2,
    });

    console.log({ resetInfo });

    navigate("/login");
  };
  const onFinish = (values: Record<string, unknown>) => {
    openNotification(values);
    // console.log("Received values of form: ", values);
  };
  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            { message: "Please input the current new password of collection!" },
          ]}
        >
          <Input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Enter new password"
            addonAfter={
              <EyeInvisibleOutlined onClick={() => handleCurrentPassword()} />
            }
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              message:
                "Please input the current confirm password of collection!",
            },
          ]}
        >
          <Input
            type={showNewPassword ? "text" : "password"}
            placeholder="Enter confirm password"
            addonAfter={
              <EyeInvisibleOutlined onClick={() => handleShowNewPassword()} />
            }
          />
        </Form.Item>

        <PrimaryButton type="submit" styles={{ width: "100%" }}>
          Save Changes
        </PrimaryButton>
      </Form>
    </>
  );
};

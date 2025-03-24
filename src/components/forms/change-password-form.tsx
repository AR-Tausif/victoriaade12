import { Form, Input } from "antd";
import { PrimaryButton } from "../primary-button";
import { useState } from "react";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { TChangePassword } from "../../types/auth.type";
import { useChangePasswordMutation } from "../../redux/api/auth.api";
import { Loader2 } from "lucide-react";
import { HandleLogOut } from "../../lib/handleLogout";
import { toast } from "sonner";

export const ChangePasswordForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showCurrPass, setShowCurrPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [form] = Form.useForm();

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  // password show
  const handleShwingPassword = () => {
    setShowPass(!showPass);
  };
  const handleCurrPassword = () => {
    setShowCurrPass(!showCurrPass);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  // run the function when onSubmit clicked
  const onFinish = async (values: Record<string, unknown>) => {
    console.log(values);
    try {
      const changePassInfo: TChangePassword = {
        oldPassword: values.currentPassword as string,
        newPassword: values.newPassword as string,
        confirmPassword: values.confirmPassword as string,
      };
      console.log(changePassInfo);

      const response: any = await changePassword(changePassInfo).unwrap();
      console.log(response);
      // TODO: please add toast message while success
      toast.success(
        response.data.message ? response.data.message : "Password changed!"
      );
    } catch (error: any) {
      console.log(error);
      toast.error(
        error.data.message ? error.data.message : "Something went wrong!"
      );
    }
  };
  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="currentPassword"
          label="Current Password"
          rules={[{ type: "string", min: 7 }]}
        >
          <Input
            type={showCurrPass ? "text" : "password"}
            placeholder="Enter current password"
            addonAfter={
              <EyeInvisibleOutlined onClick={() => handleCurrPassword()} />
            }
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[{ type: "string", min: 4 }]}
        >
          <Input
            type={showPass ? "text" : "password"}
            placeholder="Enter new password"
            addonAfter={
              <EyeInvisibleOutlined onClick={() => handleShwingPassword()} />
            }
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={[{ type: "string", min: 4 }]}
        >
          <Input
            type={showConfirmPass ? "text" : "password"}
            placeholder="Enter confirm password"
            addonAfter={
              <EyeInvisibleOutlined onClick={() => handleConfirmPassword()} />
            }
          />
        </Form.Item>
        {isLoading ? (
          <PrimaryButton type="submit" styles={{ width: "100%" }} disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          </PrimaryButton>
        ) : (
          <HandleLogOut>
            <PrimaryButton type="submit" styles={{ width: "100%" }}>
              update
            </PrimaryButton>
          </HandleLogOut>
        )}
      </Form>
    </>
  );
};

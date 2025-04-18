import { Form, Input } from "antd";
import { PrimaryButton } from "../primary-button";
import { useMemo, useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { TChangePassword } from "../../types/auth.type";
import { useChangePasswordMutation } from "../../redux/api/auth.api";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export const ChangePasswordForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showCurrPass, setShowCurrPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [form] = Form.useForm();
  const currentPassword = Form.useWatch("currentPassword", form);
  const newPassword = Form.useWatch("newPassword", form);
  const confirmPassword = Form.useWatch("confirmPassword", form);

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

  const isButtonDisabled = useMemo(() => {
    return !(currentPassword && newPassword && confirmPassword);
  }, [currentPassword, newPassword, confirmPassword]);

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
      // TODO: please add toast message while success
      toast.success(
        response.data.message ? response.data.message : "Password changed!"
      );
    } catch (error: any) {
      console.log(error);

      if (error?.data?.errorSources?.length) {
        const fieldErrors = error?.data?.errorSources.map((err: any) => ({
          name: err.path,
          errors: [err.message],
        }));
        form.setFields(fieldErrors);
      }
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
          rules={[{ type: "string", min: 8 }]}
        >
          <Input
            type={showCurrPass ? "text" : "password"}
            placeholder="Enter current password"
            addonAfter={
              // <EyeInvisibleOutlined onClick={() => handleCurrPassword()} />
              showCurrPass ? (
                <EyeOutlined onClick={handleCurrPassword} />
              ) : (
                <EyeInvisibleOutlined onClick={handleCurrPassword} />
              )
            }
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[{ type: "string", min: 8 }]}
        >
          <Input
            type={showPass ? "text" : "password"}
            placeholder="Enter new password"
            addonAfter={
              // <EyeInvisibleOutlined onClick={() => handleShwingPassword()} />
              showPass ? (
                <EyeOutlined onClick={handleShwingPassword} />
              ) : (
                <EyeInvisibleOutlined onClick={handleShwingPassword} />
              )
            }
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["newPassword"]}
          rules={[
            { type: "string", min: 8 },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input
            type={showConfirmPass ? "text" : "password"}
            placeholder="Enter confirm password"
            addonAfter={
              showConfirmPass ? (
                <EyeOutlined onClick={handleConfirmPassword} />
              ) : (
                <EyeInvisibleOutlined onClick={handleConfirmPassword} />
              )
            }
          />
        </Form.Item>

        <PrimaryButton
          type="submit"
          styles={{ width: "100%" }}
          disabled={isLoading || isButtonDisabled}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Update"
          )}
        </PrimaryButton>
      </Form>
    </>
  );
};

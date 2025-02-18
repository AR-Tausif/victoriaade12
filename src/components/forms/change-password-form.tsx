import { Form, Input } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../primary-button";

export const ChangePasswordForm = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Current Password"
        name="current_password"
        rules={[
          { message: "Please input the current password of collection!" },
        ]}
      >
        <Input placeholder="******" />
      </Form.Item>

      <Form.Item name="new_password" label="New password">
        <Input type="text" placeholder="victoria1234@gmail.com" />
      </Form.Item>
      <Form.Item name="confirm_new_password" label="Confirm New Password">
        <Input type="text" placeholder="+99007007007" />
      </Form.Item>
      <PrimaryButton type="submit" styles={{ width: "100%" }}>
        update
      </PrimaryButton>
    </Form>
  );
};

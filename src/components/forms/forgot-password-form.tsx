import { Form, Input } from "antd";
import { PrimaryButton } from "../primary-button";

export const ForgotPasswordForm = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[{ message: "Please input the current email of collection!" }]}
      >
        <Input type="email" placeholder="Enter Your Email" />
      </Form.Item>

      <PrimaryButton type="submit" styles={{ width: "100%" }}>
        Send Code
      </PrimaryButton>
    </Form>
  );
};

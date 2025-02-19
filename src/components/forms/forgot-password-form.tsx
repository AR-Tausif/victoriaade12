import { Form, Input } from "antd";
import { PrimaryButton } from "../primary-button";
import { Link } from "react-router-dom";

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

      <Link to="/set-password">
        <PrimaryButton type="submit" styles={{ width: "100%" }}>
          Send Code
        </PrimaryButton>
      </Link>
    </Form>
  );
};

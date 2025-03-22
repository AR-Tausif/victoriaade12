import { Form, Input, notification } from "antd";
import { PrimaryButton } from "../primary-button";

export const ForgotPasswordForm = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (msg: string) => {
    api.open({
      message: msg,
      duration: 2,
    });
  };

  const onFinish = async (values: Record<string, unknown>) => {
    openNotification("sdfksj");
  };
  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
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
    </>
  );
};

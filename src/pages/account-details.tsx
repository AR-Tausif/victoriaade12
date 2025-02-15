import { Form, Input, Select } from "antd";
import { AccountDetailsTable } from "../components";
import { Option } from "antd/es/mentions";

export const AccountDetails = () => {
  const [form] = Form.useForm();

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        style={{ maxWidth: "100%", display: "flex", gap: 16 }}
        scrollToFirstError
      >
        <Form.Item
          name="month"
          style={{ width: "100%" }}
        >
          <Select placeholder="This Month">
            <Option value="january">Male</Option>
            <Option value="fabruary">Female</Option>
            <Option value="march">March</Option>
            <Option value="othrer">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="search_user"
          style={{ width: "100%" }}
          className="success"
        >
          <Input placeholder="Search User" />
        </Form.Item>
      </Form>
      <AccountDetailsTable />
    </div>
  );
};

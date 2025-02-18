import { Form, Input } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { PrimaryButton } from "../primary-button";

export function CreateSubsPlanForm() {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Subscription Name"
        name="subscriptionName"
        rules={[{ message: "Please input the title of collection!" }]}
      >
        <Input placeholder="Enter Subscription Name" />
      </Form.Item>
      <Form.Item name="description" label="Short Description">
        <TextArea
          showCount
          maxLength={100}
          placeholder="Enter Details"
          style={{ height: 120, resize: "none" }}
        />
      </Form.Item>
      <Form.Item name="price" label="Price">
        <Input addonAfter={<DollarOutlined />} placeholder="Enter Price" />
      </Form.Item>
      <PrimaryButton type="submit" styles={{ width: "100%" }}>
        Save
      </PrimaryButton>
    </Form>
  );
}

import { Form, Input } from "antd";
import { DollarOutlined, } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { PrimaryButton } from "../primary-button";

export function UpdateSubsPlanForm() {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Subscription Name"
        name="subscriptionName"
        rules={[{ message: "Please input the title of collection!" }]}
      >
        <Input
          placeholder="Enter Subscription Name"
          defaultValue="Model King"
        />
      </Form.Item>
      <Form.Item name="description" label="Short Description">
        <TextArea
          showCount
          maxLength={100}
          placeholder="Enter Details"
          style={{ height: 120, resize: "none", color:"#010101" }}
          defaultValue="You are the welcome to most effective solution to get the serious kind of project that you have build yet to mind blowing to handicraft for your all soulution to get the energies intire projects"
        />
      </Form.Item>
      <Form.Item name="price" label="Price">
        <Input type="number" addonAfter={<DollarOutlined />} placeholder="Enter Price" defaultValue={150} />
      </Form.Item>
      <PrimaryButton type="submit" styles={{ width: "100%" }}>
        Save
      </PrimaryButton>
    </Form>
  );
}

import { Form, Input } from "antd";

export function UpdateSubsPlanForm() {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Title"
        name="title"
        rules={[
          { required: true, message: "Please input the title of collection!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input type="textarea" />
      </Form.Item>
    </Form>
  );
}

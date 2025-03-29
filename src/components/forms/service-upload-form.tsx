import { Form, Input, message, Select } from "antd";
import { Option } from "antd/es/mentions";
import { PrimaryButton } from "../primary-button";

import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { useCreateServiceMutation } from "../../redux/api/service.api";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
// import "./styles/service-upload-box.css";
interface ServiceFormValues {
  service_name: string;
  status: "active" | "inactive";
  file?: { originFileObj: File }[]; // Optional because the file upload is not required
}

const { Dragger } = Upload;

export const ServiceUploadForm = ({ onClose }: { onClose: any }) => {
  const [form] = Form.useForm();

  const [createService, { isLoading }] = useCreateServiceMutation();

  const onFinish = async (values: ServiceFormValues) => {
    try {

      const forms = new FormData();

      forms?.append(
        "data",
        JSON.stringify({ name: values.service_name, status: values.status })
      );

      const exactFile = values.file![0].originFileObj as File;

      if (!exactFile) {
        toast.error("Please upload a file!");
        return;
      }

      forms.append("image", exactFile);

      // log the FormData
      // console.log("FormData content:");
      // for (const pair of forms.entries()) {
      //   console.log(pair[0], pair[1]);
      // }

      const response = await createService(forms).unwrap();

      if (!response.success) {
        toast.error(response.message || "Something went wrong");
        return;
      }

      toast.success(response.message || "Service created successfully");
      form.resetFields(); // Reset form after successful submission
      onClose(false);
    } catch (error: any) {
      toast.error(error.message ? error.message : "something went wrong");
      console.log(error);
    }

    onClose(false);
  };

  const onFinishFailed = () => {
    toast.error("Submit failed!");
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="file"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
          rules={[{ required: true, message: "Service photo is required!" }]}
        >
          <Dragger
            name="file"
            multiple={false}
            maxCount={1}
            beforeUpload={(file) => {
              const maxSize = 4 * 1024 * 1024; // 4MB limit

              if (file.size > maxSize) {
                toast.error("File size must be less than 4MB");
                return Upload.LIST_IGNORE; // Prevents the file from being added
              }

              return false; // Prevents auto-upload
            }}
            style={{ height: "52px", background: "#A011FF", color: "#FDFDFD" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ color: "#fdfdfd", marginTop: 10 }} />
              </p>
              <p style={{ fontSize: 25, fontWeight: 500 }}>
                Upload Service Image
              </p>
            </div>
          </Dragger>
        </Form.Item>

        <Form.Item
          name="service_name"
          label="Service Name"
          rules={[{ required: true, message: "Service Name is required!" }]}
        >
          <Input placeholder="Enter Service Name" required />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Status is required!" }]}
        >
          <Select placeholder="Select Service Status" aria-required>
            <Option value="active">Active</Option>
            <Option value="inactive">In Active</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          {isLoading ? (
            <PrimaryButton styles={{ width: "100%", padding: 20 }} disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </PrimaryButton>
          ) : (
            <PrimaryButton
              type="submit"
              styles={{ width: "100%", padding: 20 }}
            >
              Submit
            </PrimaryButton>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

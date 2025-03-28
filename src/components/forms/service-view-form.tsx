import { Button, Form, Input, notification, Select } from "antd";
import { Option } from "antd/es/mentions";
import { TService } from "../../types/service";
import { useUpdateServiceByIdMutation } from "../../redux/api/service.api";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const ServiceViewForm = ({
  serviceViewContent,
}: {
  serviceViewContent: TService;
}) => {
  const [form] = Form.useForm();
  // RTK: update service item mutation
  const [updateServiceById, { isLoading }] = useUpdateServiceByIdMutation();
  const { name, status } = serviceViewContent;

  const onFinish = async (values: Record<string, unknown>) => {
    console.log(values);

    try {
      const forms = new FormData();

      forms?.append(
        "data",
        JSON.stringify({ name: values.serviceName, status: values.status })
      );
      // forms?.append("image", exactFile);
      const response = await updateServiceById({
        serviceId: serviceViewContent._id,
        serviceInfo: forms,
      });
      console.log(response, "response");

      toast.success("service updated");
    } catch (error: any) {
      toast.error(error.message ? error.message : "something went wrong");
      console.log(error);
    }
    // console.log("Received values of form: ", values);
  };

  const onFinishFailed = () => {
    // console.log("onfinnished...");
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
          name="serviceName"
          label="Service Name"
          rules={[{ type: "string", min: 6 }]}
        >
          <Input placeholder="input placeholder" defaultValue={name} />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ message: "Please select status!" }]}
        >
          <Select placeholder="select status" defaultValue={status}>
            <Option value="active">Active</Option>
            <Option value="inactive">In Active</Option>
          </Select>
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            //   alignItems: "center",
          }}
        >
          <Form.Item style={{ width: "100%" }}>
            {isLoading ? (
              <Button
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
                  color: "#FDFDFD",
                }}
                disabled
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </Button>
            ) : (
              <Button
                htmlType="submit"
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
                  color: "#FDFDFD",
                }}
              >
                Update
              </Button>
            )}
          </Form.Item>
          <Form.Item style={{ width: "100%" }}>
            <Button style={{ width: "100%" }}>Delete</Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import { TServiceMappedData } from "../../types/service";
import { useUpdateServiceByIdMutation } from "../../redux/api/service.api";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { DeleteActionButtons } from "../cards/delete-action-card";

export const ServiceViewForm = ({
  serviceViewContent,
  handleDelete,
  deleteUser,
  isLoading,
  setDeleteUser,
  setDeleteServiceId,
  setOpenAccountDetail,
}: {
  serviceViewContent: TServiceMappedData;
  handleDelete: () => void;
  isLoading?: boolean;
  setOpenAccountDetail: (value: boolean) => void;
  setDeleteUser: (value: boolean) => void;
  setDeleteServiceId: (value: string) => void;
  deleteUser: boolean;
}) => {
  const [form] = Form.useForm();
  // RTK: update service item mutation
  const [updateServiceById, { isLoading: updateLoading }] =
    useUpdateServiceByIdMutation();
  const { serviceName, status, key } = serviceViewContent;

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
        serviceId: serviceViewContent.key,
        serviceInfo: forms,
      });
      console.log(response, "response");

      toast.success("service updated");
      setOpenAccountDetail(false);
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
          rules={[{ type: "string" }]}
        >
          <Input placeholder="input placeholder" defaultValue={serviceName} />
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
        <div className="flex justify-center gap-2">
          <Form.Item style={{ width: "100%" }}>
            {updateLoading ? (
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
            <Button
              onClick={() => {
                setDeleteUser(true);
                setDeleteServiceId(key);
              }}
              style={{ width: "100%" }}
            >
              Delete
            </Button>
          </Form.Item>
        </div>
      </Form>

      {/* Delete confirm modal */}
      <DeleteActionButtons
        textContent="Are you sure you want to delete this service?"
        open={deleteUser}
        onConfirm={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
        handleDelete={handleDelete}
        isLoading={isLoading}
      />
    </>
  );
};

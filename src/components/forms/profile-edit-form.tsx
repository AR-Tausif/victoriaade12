import { Form, Input } from "antd";
import { PrimaryButton } from "../primary-button";
import { TProfileEdit } from "../../types/profile.type";
import { useEditProfileMutation } from "../../redux/api/profile.api";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { AdminProfile } from "../../types/profile";
type TProps = {
  adminProfile: AdminProfile;
  profileLoading?: boolean;
};
export const ProfileEditForm = ({ adminProfile }: TProps) => {
  const [form] = Form.useForm();

  // RTK: server profile edit mutation endpoind selection
  const [profileEdit, { isLoading }] = useEditProfileMutation();

  const onFinish = async (values: Record<string, unknown>) => {
    try {
      // store in object request body data to sending server
      const changePassInfo: TProfileEdit = {
        firstName: values.firstName as string,
        // contactNumber: values.contactNumber as string,
      };

      // RTK: sending the request body to backend server with redux toolkit
      const response: any = await profileEdit(changePassInfo).unwrap();

      // TOAST: popup the toast message when dont the work
      toast.success(
        response.data.message ? response.data.message : "Profile changed"
      );

      // Catch error while api stuck or anything
    } catch (error: any) {
      console.log(error);
      toast.error(
        error.data.message ? error.data.message : "Something wen wrong!"
      );
    }
  };

  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ message: "Please input the title of collection!" }]}
        >
          <Input
            placeholder="@firstName"
            defaultValue={adminProfile?.firstName && adminProfile?.firstName}
          />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <Input
            type="email"
            // addonAfter={<DollarOutlined />}
            placeholder="victoria@gmail.com"
            defaultValue={adminProfile?.email && adminProfile?.email}
            disabled
          />
        </Form.Item>
        <Form.Item name="contactNumber" label="Contact Number">
          <Input
            type="number"
            // addonAfter={<DollarOutlined />}
            placeholder="+99007007007"
            defaultValue={
              adminProfile?.contactNumber && adminProfile?.contactNumber
            }
            disabled
          />
        </Form.Item>
        {isLoading ? (
          <PrimaryButton type="submit" styles={{ width: "100%" }}>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          </PrimaryButton>
        ) : (
          <PrimaryButton type="submit" styles={{ width: "100%" }}>
            Save
          </PrimaryButton>
        )}
      </Form>
    </>
  );
};

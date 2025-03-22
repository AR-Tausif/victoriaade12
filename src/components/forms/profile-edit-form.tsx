import { Form, Input, notification } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { PrimaryButton } from "../primary-button";
import { TProfileEdit } from "../../types/profile.type";
import { useEditProfileMutation } from "../../redux/api/profile.api";

export const ProfileEditForm = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const [profileEdit, { isLoading }] = useEditProfileMutation();

  // const openNotification = (data: Record<string, unknown>) => {
  //   const b = {
  //     ...data,
  //   };
  //   api.open({
  //     message: "Service Updated succesfully",
  //     description: (
  //       <pre>
  //         <code>{JSON.stringify(b)}.</code>
  //       </pre>
  //     ),
  //     duration: 2,
  //   });
  // };
  const onFinish = async (values: Record<string, unknown>) => {
    // openNotification(values);
    // console.log("Received values of form: ", values);
    console.log(values);
    try {
      const changePassInfo: TProfileEdit = {
        userName: values.username as string,
        contactNumber: values.contactNumber as string,
      };
      console.log(changePassInfo);

      const response: any = await profileEdit(changePassInfo).unwrap();
      console.log(response);
      // TODO: please add toast message while success
      console.log("successfully change the password");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ message: "Please input the title of collection!" }]}
        >
          <Input placeholder="@victoria" />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <Input
            type="email"
            // addonAfter={<DollarOutlined />}
            placeholder="victoria@gmail.com"
            disabled
          />
        </Form.Item>
        <Form.Item name="contactNumber" label="Contact Number">
          <Input
            type="number"
            // addonAfter={<DollarOutlined />}
            placeholder="+99007007007"
          />
        </Form.Item>
        <PrimaryButton type="submit" styles={{ width: "100%" }}>
          Save
        </PrimaryButton>
      </Form>
    </>
  );
};

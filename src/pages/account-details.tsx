import { Form, Input, Select } from "antd";
import { AccountDetailsTable } from "../components";
import { Option } from "antd/es/mentions";
import { months } from "../assets/data";
import { useUsersQuery } from "../redux/api/account-details";

export const AccountDetails = () => {
  const [form] = Form.useForm();

  // RTK: retrieved an admin profile data from database
  const { data, isLoading } = useUsersQuery("");

  const onFinish = () => {};
  console.log(data);

  return (
    <div>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        style={{ maxWidth: "100%", display: "flex", gap: 16 }}
        scrollToFirstError
      >
        <Form.Item name="month" style={{ width: "100%" }}>
          <Select placeholder="This Month">
            {months.map((month) => (
              <Option value={month}>{month}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="search_user"
          style={{ width: " 100%" }}
          className="success"
        >
          <Input placeholder="Search User" />
        </Form.Item>
      </Form>
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 mt-3 mb-6 rounded"></div>
          <div className="h-10 bg-gray-300 mb-6 rounded"></div>
          <div className="h-10 bg-gray-200 mb-6 rounded"></div>
          <div className="h-10 bg-gray-300 mb-6 rounded"></div>
          <div className="h-10 bg-gray-200 mb-6 rounded"></div>
          <div className="h-10 bg-gray-300 mb-6 rounded"></div>
          <div className="h-10 bg-gray-200 mb-6 rounded"></div>
          <div className="h-10 bg-gray-300 mb-6 rounded"></div>
          <div className="h-10 bg-gray-200 mb-6 rounded"></div>
          <div className="h-10 bg-gray-300 mb-6 rounded"></div>
          <div className="h-10 bg-gray-200 mb-6 rounded"></div>
          <div className="h-10 bg-gray-300 mb-6 rounded"></div>
          <div className="h-10 bg-gray-200 mb-6 rounded"></div>
          <div className="h-10 bg-gray-300 mb-6 rounded"></div>
          <div className="h-10 bg-gray-200 mb-6 rounded"></div>
          <div className="h-10 bg-gray-300 mb-6 rounded"></div>
        </div>
      ) : (
        <AccountDetailsTable data={data?.data?.data} />
      )}
    </div>
  );
};

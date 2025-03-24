import { Form, Input, Select } from "antd";
import { AccountDetailsTable, TableSkeleton } from "../components";
import { Option } from "antd/es/mentions";
import { months } from "../assets/data";
import { useUsersQuery } from "../redux/api/account-details";
import { useState } from "react";

export const AccountDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleType, setRoleType] = useState("");
  const [form] = Form.useForm();

  // RTK: retrieved an admin profile data from database
  const { data, isLoading, isFetching } = useUsersQuery({
    searchTerm,
    roleType,
  });

  const onFinish = () => {};
  // Handle search on blur
  const onSearch = (e: any) => {
    const value = e.target.value.trim(); // Get the input value
    setSearchTerm(value); // Update search term state
  };

  console.log(data);
  const handleAccountType = (e: string) => {
    setRoleType(e.trim());
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
        <Form.Item name="month" style={{ width: "100%" }}>
          <Select placeholder="This Month">
            {months.map((month) => (
              <Option value={month}>{month}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="search_user" style={{ width: " 100%" }}>
          <Input
            placeholder="Search User"
            onBlur={onSearch}
            onPressEnter={onSearch}
          />
        </Form.Item>
      </Form>
      {isLoading || isFetching ? (
        <TableSkeleton />
      ) : (
        <AccountDetailsTable
          data={data?.data?.data}
          handleAccountType={handleAccountType}
        />
      )}
    </div>
  );
};

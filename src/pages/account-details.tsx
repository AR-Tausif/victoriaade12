import { Form, Input, Select } from "antd";
import { AccountDetailsTable, TableSkeleton } from "../components";
import { Option } from "antd/es/mentions";
import { months } from "../assets/data";
import { useUsersQuery } from "../redux/api/account-details";
import { useState } from "react";

export const AccountDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleType, setRoleType] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [form] = Form.useForm();

  // RTK: retrieved an admin profile data from database
  const { data, isLoading, isFetching } = useUsersQuery({
    searchTerm,
    roleType,
    createdAt,
  });

  const onFinish = () => {};

  const onSearch = (e: any) => {
    const value = e.target.value.trim();
    setSearchTerm(value);
  };

  const handleAccountType = (e: string) => {
    setRoleType(e.trim());
  };

  // Modified to handle month selection
  const handleMonthSelect = (value: string) => {
    // Convert month name to date format (e.g., "January" to "2024-01")
    const monthIndex = months.indexOf(value) + 1;
    const currentYear = new Date().getFullYear();
    const monthString = monthIndex < 10 ? `0${monthIndex}` : monthIndex;
    const dateString = `${currentYear}-${monthString}`;
    setCreatedAt(dateString);
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
          <Select placeholder="This Month" onChange={handleMonthSelect}>
            {months.map((month) => (
              <Option key={month} value={month}>
                {month}
              </Option>
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

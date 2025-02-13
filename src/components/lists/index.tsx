import React from "react";
import { Divider, List, Typography } from "antd";

const data = [
  { prop: "Full Name", value: "Anna Suraiya" },
  { prop: "User Name", value: "Anna@13" },
  { prop: "Email", value: "anna.suraiya@gmail.com" },
  { prop: "Phone Number", value: "+880 123 456 7890" },
  { prop: "Location", value: "123/A, West California-USA" },
  { prop: "Account Type", value: "Service Provider" },
  { prop: "Subscription type", value: "Basic Subscritpion Plan" },
  { prop: "Services", value: "Hair Service, nail service" },
  { prop: "Business Name", value: "Bliss Studio Lyd." },
  { prop: "Overall Rating", value: "⭐4.7 (1.2k reviews)" },
  { prop: "Value For Money", value: "0%" },
];

export const Lists: React.FC = () => {
  return (
    <List
      header={
        <h4
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: 0.2,
          }}
        >
          Personal Details
        </h4>
      }
      bordered
    >
      {data.map((item) => (
        <List.Item style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#727272" }}>
            {item.prop}:
          </p>
          <p style={{ fontSize: 10, fontWeight: 600, color: "#010101" }}>
            {item.value} 
          </p>
        </List.Item>
      ))}
    </List>
  );
};

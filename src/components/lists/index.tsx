import React from "react";
import { Divider, List, Typography } from "antd";
import { IUserDetails } from "../../types";


export const Lists = ({user}:{user:IUserDetails}) => {
  const userDetails = [
    { prop: "Full Name", value: user.fullName },
    { prop: "User Name", value: user.userName },
    { prop: "Email", value: user.email },
    { prop: "Phone Number", value: user.phoneNumber },
    { prop: "Location", value: user.location },
    { prop: "Account Type", value: user.accountType },
    { prop: "Subscription Type", value: user.subscriptionType },
    { prop: "Services", value: user.services },
    { prop: "Business Name", value: user.businessName },
    { prop: "Overall Rating", value: user.overallRating },
    { prop: "Value For Money", value: user.valueForMoney },
  ];
  return (
    <List
    key={user.email}
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
      {userDetails.map((item) => (
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

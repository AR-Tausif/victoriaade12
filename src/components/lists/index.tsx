import React from "react";
import { Divider, List, Typography } from "antd";
import { IUserDetails } from "../../types";

const renderProperties = [
  { prop: "Full Name", value: "Tausif Ahmed" },
  { prop: "User Name", value: "tausif" },
  { prop: "Email", value: "tausif.ritu1@gmail.com" },
  { prop: "Phone Number", value: "01823771127" },
  { prop: "Location", value: "Jamalganj" },
  { prop: "Account Type", value: "Provider" },
  // { prop: "Subscription Type", value: user.subscriptionType },
  // { prop: "Services", value: user.services },
  // { prop: "Business Name", value: user.businessName },
  // { prop: "Overall Rating", value: user.overallRating },
  // { prop: "Value For Money", value: user.valueForMoney },
];
export const Lists = ({
  user,
  renderedProperties = [renderProperties],
}: {
  user: IUserDetails;
  renderedProperties: typeof renderProperties;
}) => {
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
      {renderedProperties.map((item) => (
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

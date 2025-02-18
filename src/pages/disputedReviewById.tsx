import { Checkbox, CheckboxProps, Col, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { DisputedReviewCard, PrimaryButton } from "../components";
import { Lists } from "../components/lists";
import { IUserDetails } from "../types";

export const DisputedReviewById = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const userDetails = {
    fullName: "Tausif Ahmed",
    userName: "tausif",
    email: "string@gmail.com",
    phoneNumber: "01823771127",
    photo: "string",
    location: "string",
    accountType: "string",
    subscriptionType: "string",
    services: "string",
    businessName: "string",
    overallRating: "string",
    valueForMoney: "string",
  };

  return (
    <div
      style={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Status
      </h3>

      {/* checkbox section */}
      <div
        className=""
        style={{
          textAlign: "center",
        }}
      >
        <Checkbox onChange={onChange}>Approve</Checkbox>
        <Checkbox onChange={onChange}>Remove</Checkbox>
      </div>

      {/* button section */}
      <PrimaryButton
        styles={{
          width: "100%",
          padding: 24,
          fontSize: 16,
        }}
      >
        Mark as resolved
      </PrimaryButton>

      <Row gutter={24}>
        <Col span={12}>
          <DisputedReviewCard userDetails={userDetails} />
        </Col>
        <Col span={12}>
          <DisputedReviewCard userDetails={userDetails} />
        </Col>
      </Row>
    </div>
  );
};

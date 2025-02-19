import { CloseOutlined } from "@ant-design/icons";
import { Lists } from "../lists";
import "./styles/profile-details-view-card.css";
import { IUserDetails } from "../../types";
export const ProfileDetailsViewCard = ({
  isNoneClose = false,
  user,
}: {
  user: IUserDetails;
  isNoneClose?: boolean;
}) => {
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
  return (
    <div className="profile-details">
      {/* profile intro with name and email */}
      <div className="profile-intro">
        <p
          className="close-button"
          style={{ display: isNoneClose ? "none" : "block" }}
        >
          <CloseOutlined />
        </p>
        <img src={user.photo} alt="profile picture" className="profile-image" />
        <h5 className="profile-name">{user.fullName}</h5>
        <p className="profile-email">{user.email}</p>
      </div>

      <div className="lists-container">
        <Lists renderedProperties={renderProperties} user={user} />
      </div>
    </div>
  );
};

import { CloseOutlined } from "@ant-design/icons";
import { Lists } from "../lists";

export const DisputedReviewCard = ({ userDetails }) => {
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
        <p className="close-button">
          <CloseOutlined />
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s"
          alt="profile picture"
          className="profile-image"
        />
        <h5 className="profile-name">Tausif Ahmed</h5>
        <p className="profile-email">tausif.ritu1@gmail.com</p>
      </div>

      <div className="lists-container">
        <Lists user={userDetails} renderedProperties={renderProperties} />
      </div>
    </div>
  );
};

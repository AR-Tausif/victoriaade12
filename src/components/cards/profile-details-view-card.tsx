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
        <Lists user={user} />
      </div>
    </div>
  );
};

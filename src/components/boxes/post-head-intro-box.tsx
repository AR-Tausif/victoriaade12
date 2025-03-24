
import { MapDotIcon } from "../icons";

export const PostHeadIntroBox = ({ user }: { user: any }) => {
  return (
    <div className="user-info">
      <img src={user.profileImage} alt="profile picture" className="user-image" />
      <div className="user-details">
        <h5 className="studio-name">{user.firstName}</h5>
        <div className="location">
          <p className="map-icon">
            <MapDotIcon size="11.10" />
          </p>
          <p className="address">123/A- {user.city}</p>
        </div>
      </div>
    </div>
  );
};

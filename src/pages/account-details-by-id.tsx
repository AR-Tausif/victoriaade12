import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import { Lists } from "../components/lists";
import { MapDotIcon } from "../components/icons";
import "./styles/account-details.css";

export const AccountDetailsById = () => {
  const images = [
    "https://andrewstuder.com/wp-content/uploads/2020/04/AF3I3830-scaled.jpg",
    "https://andrewstuder.com/wp-content/uploads/2020/04/AF3I3830-scaled.jpg",
  ];

  return (
    <div className="account-grid">
      {/* profile details view */}
      <div className="profile-details">
        {/* profile intro with name and email */}
        <div className="profile-intro">
          <p className="close-button">
            <CloseOutlined />
          </p>
          <img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            alt="profile picture"
            className="profile-image"
          />
          <h5 className="profile-name">Anna Suraiya</h5>
          <p className="profile-email">tausif.ritu1@gmail.com</p>
        </div>

        <div className="lists-container">
          <Lists />
        </div>
      </div>

      {/* content section */}
      <div className="content-section">
        <div className="content-grid">
          <div className="post-card">
            <div className="post-container">
              <div className="card-header">
                <div className="user-info">
                  <img
                    src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                    alt="profile picture"
                    className="user-image"
                  />
                  <div className="user-details">
                    <h5 className="studio-name">Bliss Beauty Studio</h5>
                    <div className="location">
                      <p className="map-icon">
                        <MapDotIcon size="11.10" />
                      </p>
                      <p className="address">123/A- Florida, USA</p>
                    </div>
                  </div>
                </div>
                <div className="delete-icon">
                  <DeleteOutlined />
                </div>
              </div>
              <Post images={images} />
            </div>
          </div>
          <div className="empty-section"></div>
        </div>
      </div>
    </div>
  );
};

const Post = ({ images }: { images: string[] }) => {
  return (
    <div className={`image-container ${images.length === 1 ? "single" : ""}`}>
      {images.map((image: string, index: number) => (
        <img key={index} src={image} alt={`post-img-${index}`} />
      ))}
    </div>
  );
};

export default Post;

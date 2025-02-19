import "./styles/account-details.css";
import { PostCard, ProfileDetailsViewCard } from "../components";
import { IUserDetails } from "../types";

export const AccountDetailsById = () => {
  const images = [
    "https://andrewstuder.com/wp-content/uploads/2020/04/AF3I3830-scaled.jpg",
    "https://andrewstuder.com/wp-content/uploads/2020/04/AF3I3830-scaled.jpg",
  ];
  const user: IUserDetails = {
    fullName: "Anna Suraiya",
    userName: "Anna@13",
    email: "anna.suraiya@gmail.com",
    phoneNumber: "+880 123 456 7890",
    photo:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    location: "123/A, West California-USA",
    accountType: "Service Provider",
    subscriptionType: "Basic Subscription Plan",
    services: "Hair Service, nail service",
    businessName: "Bliss Studio Lyd.",
    overallRating: "⭐4.7 (1.2k reviews)",
    valueForMoney: "0%",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      {/* profile details view */}

      <div
        style={{
          width: "35%",
        }}
      >
        <ProfileDetailsViewCard user={user} />
      </div>
      {/* content section */}
      <div
        style={{
          width: "64%",
          minHeight: "100vh",
          background: "#fdfdfd",
          padding: 24,
          borderRadius: 8,
        }}
      >
        <h2
          style={{
            padding: "20px 0",
          }}
        >
          Posts
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            padding: 16,
            borderRadius: 8,
          }}
        >
          <PostCard photo={images[0]} />
          <PostCard photo={images[0]} />
          <PostCard photo={images[0]} />
          <PostCard photo={images[0]} />
          <PostCard photo={images[0]} />
        </div>
      </div>
      {/* <div className="content-section">
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
      </div> */}
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

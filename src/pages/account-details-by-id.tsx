import "./styles/account-details.css";
import { PostCard, ProfileDetailsViewCard } from "../components";
import { useParams } from "react-router-dom";
import {
  useSellerPostQuery,
  useSellerProfileQuery,
} from "../redux/api/account-details";

export const AccountDetailsById = () => {
  const { accountId } = useParams();

  const { data, isLoading } = useSellerProfileQuery(accountId);
  const { data: sellerPosts, isLoading: sellerPostLoading } =
    useSellerPostQuery(data?.data?.user?._id);
  console.log({ sellerPosts });

  const images = [
    "https://andrewstuder.com/wp-content/uploads/2020/04/AF3I3830-scaled.jpg",
    "https://andrewstuder.com/wp-content/uploads/2020/04/AF3I3830-scaled.jpg",
  ];

  console.log({ data:data?.data });

  if (isLoading) {
    return <div style={{ fontSize: 54 }}>Loading...</div>;
  }
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
        <ProfileDetailsViewCard user={data?.data?.user} />
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
          {sellerPosts?.data.map((post:) => {
            <PostCard user={data?.data} post={post} />;
          })}
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

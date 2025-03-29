import "./styles/account-details.css";
import {
  AccountDetailsCardSkeleton,
  PostCard,
  PostSkeleton,
  ProfileDetailsViewCard,
} from "../components";
import { useParams } from "react-router-dom";
import {
  useSellerPostQuery,
  useSellerProfileQuery,
} from "../redux/api/account-details";

export const AccountDetailsById = () => {
  const { accountId } = useParams();

  // Fetch seller profile data using accountId
  const { data: profileData, isLoading: profileLoading } =
    useSellerProfileQuery(accountId);

  // Fetch seller posts using the user ID from profile data
  const { data: sellerPosts, isLoading: sellerPostLoading } =
    useSellerPostQuery(
      profileData?.data?.user?._id,
      { skip: !profileData?.data?.user?._id } // Skip query until user ID is available
    );

  // Loading state for profile
  if (profileLoading) {
    return (
      <div className="flex justify-between gap-4">
        <div style={{ width: "35%" }}>
          <AccountDetailsCardSkeleton />
        </div>
        {/* Content section */}
        <div
          className="flex flex-col gap-4"
          style={{
            width: "64%",
            minHeight: "100vh",
            background: "#fdfdfd",
            padding: 24,
            borderRadius: 8,
          }}
        >
          <PostSkeleton />
          <PostSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between gap-4">
      {/* Profile details view */}
      <div style={{ width: "35%" }}>
        <ProfileDetailsViewCard isNoneClose user={profileData?.data?.user} />
      </div>

      {/* Content section */}
      <div
        style={{
          width: "64%",
          minHeight: "100vh",
          background: "#fdfdfd",
          padding: 24,
          borderRadius: 8,
        }}
      >
        <h2 style={{ padding: "20px 0" }}>Posts</h2>
        {sellerPostLoading ? (
          <div>Loading posts...</div>
        ) : (
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
            {sellerPosts?.data?.length > 0 ? (
              sellerPosts.data.map((post: any) => (
                <PostCard
                  key={post._id}
                  user={profileData?.data.user}
                  post={post}
                />
              ))
            ) : (
              <div>No posts available</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// const Post = ({ images }) => {
//   return (
//     <div className={`image-container ${images.length === 1 ? "single" : ""}`}>
//       {images.map((image, index) => (
//         <img key={index} src={image} alt={`post-img-${index}`} />
//       ))}
//     </div>
//   );
// };

// export default Post;

import { toast } from "sonner";
import { useDeleteSellerPostMutation } from "../../redux/api/account-details";
import { PostHeadIntroBox } from "../boxes/post-head-intro-box";
import { useState } from "react";

export const PostCard = ({ user, post }: { user: any; post: any }) => {
  const [open, setOpen] = useState(false);
  const [deleteSellerPost, { isLoading }] = useDeleteSellerPostMutation();

  const handleDeletepost = async () => {
    try {
      const response = await deleteSellerPost(post._id).unwrap();
      toast.success(response.message || "Post deleted successfully");
      setOpen(false);
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Something went wrong to delete post"
      );
    }
  };
  return (
    <div
      style={{
        width: "100%",
        flex: "1 1 calc(50% - 16px)",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: 8,
        padding: 24,
        maxWidth: "50%",
      }}
      role="post item"
    >
      <PostHeadIntroBox
        isLoading={isLoading}
        handleDeletepost={handleDeletepost}
        user={user}
        open={open}
        setOpen={setOpen}
      />
      {/* text section */}
      <div
        style={{
          padding: 5,
          margin: "5px 0",
        }}
      >
        <p>
          Another happy client walked out feeling confidedn, radiant, and
          absolutely stunning!. At our hair transformation services are designed
          to bring out your best look. From dull and frizzy to sleek and silky,
          we're here to make magic hapen. Don't wait book your appointment today
          and let us wrk our magic!
        </p>
      </div>
      {/* image section */}
      <div>
        <img
          src={user?.profileImage}
          alt="post image"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      </div>
    </div>
  );
};

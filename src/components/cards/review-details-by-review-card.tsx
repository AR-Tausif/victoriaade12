import { List } from "antd";
import { TObserveReviewBy } from "../../types/disputed-review/observe-review";

export const ReviewByDetailsReviewCard = ({
  title,
  reviewBy,
}: {
  title: string;
  reviewBy: TObserveReviewBy;
}) => {

  const renderPropertiesOne = [
    { prop: "Full Name", value: reviewBy.name },
    {
      prop: "Review Text",
      value: reviewBy.reviewText,
    },
    { prop: "Rating", value: reviewBy.ratings },
    {
      prop: "Photo",
      value: reviewBy.reviewPhoto
    },
  ];
  return (
    <div className="profile-details">
      {/* profile intro with name and email */}
      <div className="profile-intro">
        {/* <p className="close-button">
          <CloseOutlined />
        </p> */}
        <img
          src={
            reviewBy.photo
              ? reviewBy.photo
              : "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"
          }
          alt="profile picture"
          className="profile-image"
        />
        <h5 className="profile-name">{reviewBy?.name}</h5>
        <p className="profile-email">{reviewBy?.email}</p>
      </div>

      <div className="lists-container">
        <List
          key={reviewBy?.email}
          header={
            <h4
              style={{
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: 0.2,
              }}
            >
              {title}
            </h4>
          }
          bordered
        >
          {renderPropertiesOne.map((item) =>
            item.prop.toLocaleLowerCase() !== "photo" ? (
              <List.Item
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 20,
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: 14, fontWeight: 700, color: "#727272" }}>
                  {item.prop}:
                </p>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#010101" }}>
                  {item.value}
                </p>
              </List.Item>
            ) : (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#727272",
                    marginLeft: 25,
                  }}
                >
                  {item.prop}:
                </p>
                <img
                  src={item.value as string}
                  alt=""
                  style={{
                    width: "100%",
                    borderRadius: 8,
                    maxHeight: 300,
                    objectFit: "cover",
                    padding: 20,
                  }}
                />
              </div>
            )
          )}
        </List>
      </div>
    </div>
  );
};

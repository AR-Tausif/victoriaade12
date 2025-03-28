import { List } from "antd";
import { TObserveProviderDispute } from "../../types/disputed-review/observe-review";

export const ReviewDetailsProviderDisputedCard = ({
  title,
  providerDispute,
}: {
  title: string;
  providerDispute: TObserveProviderDispute;
}) => {
  const renderPropertiesTwo = [
    { prop: "Full Name", value: providerDispute.name },
    { prop: "Reason", value: providerDispute.reason },
    {
      prop: "Explanation",
      value: providerDispute.explanation,
    },
    {
      prop: "Photo",
      value: providerDispute.evidence,
    },
  ];
  return (
    <div className="profile-details">
      <div className="profile-intro">
        <img
          src={
            providerDispute.photo
              ? providerDispute.photo
              : "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"
          }
          alt="profile picture"
          className="profile-image"
        />
        <h5 className="profile-name">{providerDispute?.name}</h5>
        <p className="profile-email">{providerDispute?.email}</p>
      </div>

      <div className="lists-container">
        <List
          key={providerDispute?.email}
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
          {renderPropertiesTwo.map((item) =>
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

                {Array.isArray(item.value) ? (
                  item.value.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc as string}
                      alt={`Image ${index + 1}`}
                      style={{
                        width: "100%",
                        borderRadius: 8,
                        maxHeight: 300,
                        objectFit: "cover",
                        padding: 20,
                      }}
                    />
                  ))
                ) : (
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
                )}
              </div>
            )
          )}
        </List>
      </div>
    </div>
  );
};

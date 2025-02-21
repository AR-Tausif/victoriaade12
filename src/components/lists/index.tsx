import { List } from "antd";
import { ITableUser, IUserDetails } from "../../types";

export const Lists = ({
  user,
  renderedProperties,
  title = "Personal Details",
}: {
  title?: string;
  user: ITableUser;
  renderedProperties: { prop: string; value: string }[];
}) => {
  return (
    <List
      key={user.email}
      header={
        <h4
          style={{
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: 0.2,
          }}
        >
          {title}
        </h4>
      }
      bordered
    >
      {renderedProperties.map((item) =>
        item.prop.toLocaleLowerCase() !== "photo" ? (
          <List.Item style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#727272" }}>
              {item.prop}:
            </p>
            <p style={{ fontSize: 10, fontWeight: 600, color: "#010101" }}>
              {item.value}
            </p>
          </List.Item>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#727272",
                marginLeft: 25,
              }}
            >
              {item.prop}:
            </p>
            <img
              src={item.value}
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
  );
};

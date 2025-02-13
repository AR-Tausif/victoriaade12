import { PlusCircleOutlined } from "@ant-design/icons";
export const Service = () => {
  return (
    <div>
      <div
        style={{
          background: "#A011FF",
          width: "100%",
          padding: "13px 30px",
          color: "#FDFDFD",
          fontWeight: 600,
          fontSize: 18,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          borderRadius: 8,
        }}
      >
        <p>
          <PlusCircleOutlined
            style={{ color: "#FDFDFD", fontSize: 37,}}
          />
        </p>
        <p> Add new service</p>
      </div>
    </div>
  );
};

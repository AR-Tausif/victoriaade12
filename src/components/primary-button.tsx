import { Button } from "antd";
import { ReactNode } from "react";

export const PrimaryButton = ({
  children,
  className = "",
  type = "button",
  styles,
}: {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  styles?: object;
}) => {
  return (
    <Button
      htmlType={type}
      style={{
        background: "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
        color: "#FDFDFD",
        ...styles,
      }}
      className={className}
    >
      {children}
    </Button>
  );
};

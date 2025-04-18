import { BellOutlined } from "@ant-design/icons";
import "./styles/notification-card.css";
import { NotificationType } from "../../types/notification";
import { toTitleCase } from "../../utils";
type NotificationCardProps = {
  notificationItem: NotificationType;
};
export const NotificationCard = ({
  notificationItem,
}: NotificationCardProps) => {
  return (
    <div className="flex justify-between items-center hover:bg-[#e6e6fa] px-4 py-2 rounded-md cursor-pointer transition-all duration-200 ease-in-out">
      <div className="notification_card">
        <div
          style={{
            padding: "8px 10px",
            background: "#A011FF",
            color: "#fdfdfd",
            fontSize: 24,
            borderRadius: 8,
          }}
        >
          <BellOutlined />
        </div>
        <div className="">
          <p className="text-[18px] mb-1 font-bold">
            {
              // notificationItem.title.length > 20
              //   ? `${notificationItem.title.slice(0, 20)}...`
              //   : notificationItem.title

              toTitleCase(notificationItem.title)
            }
          </p>
          <p>
            {new Date(notificationItem.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </p>
        </div>
      </div>
      {notificationItem.isRead === false ? (
        <div className="w-4 h-4 justify-self-end bg-blue-700/50 rounded-full" />
      ) : (
        <div className="w-4 h-4 justify-self-end bg-red-700 rounded-full" />
      )}
    </div>
  );
};

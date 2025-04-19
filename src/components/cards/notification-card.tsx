import { BellOutlined } from "@ant-design/icons";
import "./styles/notification-card.css";
import { NotificationType } from "../../types/notification";
import { toTitleCase } from "../../utils";
import { useReadNotificationMutation } from "../../redux/api/notification.api";
import { toast } from "sonner";
type NotificationCardProps = {
  notificationItem: NotificationType;
};
export const NotificationCard = ({
  notificationItem,
}: NotificationCardProps) => {
  const [readNotification] = useReadNotificationMutation();
  const handleReadNotification = async () => {
    try {
      const response = await readNotification(notificationItem._id);
      toast.success(response?.data.message);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };
  return (
    <div
      className={`flex justify-between items-center ${
        notificationItem?.isRead ? "" : "bg-blue-50"
      } hover:bg-[#e6e6fa] px-4 rounded-md cursor-pointer transition-all duration-200 ease-in-out`}
      onClick={notificationItem.isRead ? undefined : handleReadNotification}
    >
      <div className="flex justify-center items-center gap-4 p-4 rounded-2 transition-all duration-700">
        <div
          className="flex justify-center items-center"
          style={{
            width: 40,
            height: 40,
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
      {/* {notificationItem.isRead === false ? (
        <div className="w-4 h-4 justify-self-end bg-blue-700/50 rounded-full" />
      ) : (
        <div className="w-4 h-4 justify-self-end bg-red-700 rounded-full" />
      )} */}
    </div>
  );
};

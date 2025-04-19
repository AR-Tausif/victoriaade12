import { Loader2 } from "lucide-react";
import { NotificationCard } from "../components";
import { useGetAllNotificationQuery } from "../redux/api/notification.api";
import { NotificationType } from "../types/notification";

export const Notification = () => {
  const { data, isLoading } = useGetAllNotificationQuery("");
  if (isLoading) {
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <Loader2
        className="animate-spin"
        size={40}
        color="rgb(160, 17, 255)"
        style={{ margin: "auto", display: "block" }}
      />
      </div>
    
    );
  }

  return (
    <div>
      <div
        style={{
          minHeight: "90vh",
          background: "#fdfdfd",
          padding: "18px 14px",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {data?.data?.map((notification: NotificationType) => (
          <NotificationCard
            key={notification._id}
            notificationItem={notification}
          />
        ))}
      </div>
    </div>
  );
};

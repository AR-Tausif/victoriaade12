export type NotificationType = {
  _id: string;
  receiver: string;
  receiverEmail: string;
  receiverRole: string;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  link: string;
  createdAt: string;
  updatedAt: string;
};

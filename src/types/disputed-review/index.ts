export type TUser = {
  name: string;
  email: string;
  id: string;
  photo: string;
};

export type TReviewBy = {
  name: string;
  email: string;
  id: string;
  photo: string;
};
export type TReview = {
  createdAt: string;
  explanation: string;
  isDeleted: boolean;
  photos: string[];
  provider: TUser;
  reason: string;
  reviewBy: TReviewBy;
  reviewId: string;
  seller: string;
  status: "pending" | "approved" | "rejected";
  updatedAt: string;
  _id: string;
};

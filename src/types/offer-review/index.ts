export type OfferReviewType = {
  _id: string;
  creator: {
    _id: string;
    firstName: string;
    profileImage: string;
    email: string;
  };
  categoryId :{
    _id: string;
    name: string;
  }
  category: string;
  photos: string[];
  description: string;
  discount: 10;
  status: "approve" | "reject" | "pending";
  isDeleted: false;
  createdAt: string;
  updatedAt: string;
};

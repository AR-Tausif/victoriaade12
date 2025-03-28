export type TObserveReviewBy = {
  name: string;
  photo: string;
  email: string;
  id: string;
  reviewText: string;
  ratings: number;
  reviewPhoto: string;
};
export type TObserveProviderDispute = {
  name: string;
  photo: string;
  email: string;
  id: string;
  reason: string;
  explanation: string;
  evidence: string[];
};
export type TObserveReview = {
  reviewBy: TObserveReviewBy;
  providersDispute: TObserveProviderDispute;
  status: boolean;
  isDeleted: false;
  updatedAt: string;
  createdAt: string;
};

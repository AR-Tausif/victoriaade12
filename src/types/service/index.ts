type TCreateData = {
  name: string;
  status: string;
};
export type TCreateServiceBody = {
  data: TCreateData;
  image: File;
};

export type TService = {
  _id: string;
  name: string;
  image: string;
  admin: string;
  adminEmail: string;
  description: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

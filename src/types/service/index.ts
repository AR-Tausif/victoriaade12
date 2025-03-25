type TCreateData = {
  name: string;
  status: string;
};
export type TCreateServiceBody = {
  data: TCreateData;
  image: File;
};

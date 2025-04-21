export type TProfileData = {
  firstName: string;
  surName?: string;
};
export type TProfileEdit = {
  data: TProfileData;
  profileImage?: File;
};

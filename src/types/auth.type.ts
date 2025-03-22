export type TLoginBody = {
  email: string;
  password: string;
  fcmToken: string;
};
export type TResetPassword = {
  email: string;
  newPassword: string;
  confirmPassword: string;
};

export type TForgetPassword = {
  email: string;
};

export type TChangePassword = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

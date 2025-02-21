export interface IUserDetails {
  fullName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  photo: string;
  location: string;
  accountType: string;
  subscriptionType: string;
  services: string;
  businessName: string;
  overallRating: string;
  valueForMoney: string;
}

export interface ITableUser {
  key: string;
  serial: string;
  name: string;
  email: string;
  accountType: string;
  date: string;
  avatar: string;
}

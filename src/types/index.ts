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

// export interface ITableUser {
//   key: string;
//   serial: string;
//   name: string;
//   email: string;
//   accountType: string;
//   date: string;
//   avatar: string;
// }
// export interface IEarningData {
//   key: string;
//   serial: string;
//   name: string;
//   subscriptionType: string;
//   purchaseDate: string;
//   amount: number;
// }

// Assuming ITableUser has the following properties:
interface ITableUser {
  key: string;
  name: string;
  email: string;
  accountType: string;
  date: string;
  avatars: string; // or any appropriate type for avatar
  // other properties you need
}

// Update IEarningData to have all the required properties
export interface IEarningData extends ITableUser {
  serial: string;
  subscriptionType: string;
  purchaseDate: string;
  amount: number;
}

export const earningData: IEarningData[] = [
  {
    key: "1",
    serial: "#0",
    name: "Anna Suraiya",
    email: "anna@example.com",
    accountType: "Basic",
    date: "2022-01-15",
    avatars: "https://some-avatar-url.com/avatar.jpg",
    subscriptionType: "Basic Plan",
    purchaseDate: "2022-01-15",
    amount: 30,
  },
  // Add more data here
];

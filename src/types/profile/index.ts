export type AdminProfile = {
  location: {
    type: "Point";
    coordinates: number[]; // Empty array in the JSON, assuming it holds numbers (latitude, longitude)
  };
  _id: string;
  firstName: string;
  surName: string;
  userName: string;
  profileImage: string;
  email: string;
  contactNumber: string;
  fcmToken: string;
  role: "admin"; // Since this is specifically for an admin profile, we can make it a literal type
  verification: {
    verified: boolean;
    _id: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  };
  postCode: string;
  city: string;
  bio: string;
  services: string[]; // Empty array in the JSON, assuming it holds strings
  status: "active" | "inactive"; // Assuming status can be "active" or "inactive"
  locationName: string;
  isDeleted: boolean;
  isOnline: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number; // Typically used by Mongoose for version control
  passwordChangedAt: string; // ISO date string
};

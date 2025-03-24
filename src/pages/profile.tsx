import { Tabs } from "antd";
import { ChangePasswordForm, ProfileEditForm } from "../components/forms";
import { PencilLine } from "lucide-react";
import { useState } from "react";
import { useAdminProfileQuery } from "../redux/api/profile.api";
import ProflieSkeleton from "../components/skeletons/profile-skeleton";

export const Profile = () => {
  const [profile, setProfile] = useState<File>();

  // RTK: retrieved an admin profile data from database
  const { data: adminProfile, isLoading } = useAdminProfileQuery("");
  console.log(adminProfile);
  if (isLoading) {
    return (
      <div className="">
        <ProflieSkeleton />
      </div>
    );
  }

  // const profileData = profileRes?.data || {};
  const tabsListArr = [
    {
      id: 1,
      text: "Edit Proifle",
      content: (
        <div>
          <h5
            style={{
              fontWeight: 600,
              fontSize: 18,
              textAlign: "center",
              margin: "10px 0",
            }}
          >
            Edit Your Profile
          </h5>
          <ProfileEditForm
            adminProfile={adminProfile?.data}
            profileLoading={isLoading}
          />
        </div>
      ),
    },
    {
      id: 2,
      text: "Change Password",
      content: (
        <div>
          <h5
            style={{
              fontWeight: 600,
              fontSize: 18,
              textAlign: "center",
              margin: "10px 0",
            }}
          >
            Change Your Password
          </h5>
          <ChangePasswordForm />
        </div>
      ),
    },
  ];

  return (
    <div className="w-[80%] min-h-[90vh] mx-auto bg-[#fdfdfd]">
      <section
        className="flex-center gap-x-3 bg-linear-to-r from-[#9D0DFE] via-[#AA7AD6] to-[#E6E6FA]"
        style={{
          padding: 10,
        }}
      >
        <div className="relative w-max">
          <img
            src={
              profile
                ? URL.createObjectURL(profile)
                : adminProfile?.data?.profileImage
            }
            alt="Admin avatar"
            width={1200}
            height={1200}
            className="aspect-square h-auto w-[140px] rounded-full border-2 border-purple-400 p-1 object-cover"
          />

          {/* Edit button */}
          <label
            htmlFor="photo"
            className="absolute bg-white rounded-full flex-center bottom-4 right-4 aspect-square text-white/95"
            style={{
              padding: 5,
            }}
          >
            <PencilLine color="#000" size={20} />
          </label>
          <input
            id="photo"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                console.log(file);
                setProfile(file);
              }
            }}
            type="file"
            className="hidden w-full h-full"
          />
        </div>

        <div>
          <h3 className="text-3xl !font-semibold text-white">
            {adminProfile?.data?.firstName}
          </h3>
          <p className="mt-1 text-lg font-medium text-white">
            {adminProfile?.data?.role}
          </p>
        </div>
      </section>

      {/* tabs */}
      <Tabs
        defaultActiveKey="1"
        centered
        items={tabsListArr.map((list) => {
          const id = String(list.id + 1);
          return {
            label: list.text,
            key: id,
            children: (
              <div className="flex justify-center items-center">
                <div
                  style={{
                    maxWidth: 500,
                    width: 450,
                  }}
                >
                  {list.content}
                </div>
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

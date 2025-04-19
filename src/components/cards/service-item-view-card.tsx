import { TServiceMappedData } from "../../types/service";
import { ServiceViewForm } from "../forms/service-view-form";

export default function ServiceItemViewCard({
  serviceItem,
  handleDelete,
  deleteUser,
  isLoading,
  setDeleteUser,
  setDeleteServiceId,
  setOpenAccountDetail
}: {
  serviceItem: TServiceMappedData;
  handleDelete: () => void;
  isLoading?: boolean;
  setOpenAccountDetail: (value: boolean) => void;
  setDeleteUser: (value: boolean) => void;
  setDeleteServiceId: (value: string) => void;
  deleteUser: boolean;
}) {
  console.log(serviceItem, "serviceItem");

  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        padding: 20,
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        gap: 25,
      }}
    >
      <div>
        <img
          src={
            serviceItem.image
              ? serviceItem.image
              : "https://moh.gov.om/images/Image_not_available.png"
          }
          alt="service image"
          width={"100%"}
          style={{
            borderRadius: 8,
          }}
        />
      </div>
      <ServiceViewForm
        handleDelete={handleDelete}
        deleteUser={deleteUser}
        isLoading={isLoading}
        setDeleteUser={setDeleteUser}
        setOpenAccountDetail={setOpenAccountDetail}
        setDeleteServiceId={setDeleteServiceId}
        serviceViewContent={serviceItem}
      />
    </div>
  );
}

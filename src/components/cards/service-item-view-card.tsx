import {  TServiceMappedData } from "../../types/service";
import { ServiceViewForm } from "../forms/service-view-form";

export default function ServiceItemViewCard({
  serviceItem,
}: {
  serviceItem: TServiceMappedData;
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
      <ServiceViewForm serviceViewContent={serviceItem} />
    </div>
  );
}

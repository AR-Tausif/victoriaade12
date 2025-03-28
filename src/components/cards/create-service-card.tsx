import { ServiceUploadForm } from "../forms/service-upload-form";

export const CreateServiceCard = ({ onClose }: { onClose: any }) => {
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
      {/* <ServiceUploadBox /> */}
      <ServiceUploadForm onClose={onClose} />
    </div>
  );
};

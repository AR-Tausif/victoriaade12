import { Modal, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { DeleteOutlined, EyeInvisibleOutlined, EyeOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { DeleteActionButtons } from "../cards/delete-action-card";
import ServiceItemViewCard from "../cards/service-item-view-card";
import { useDeleteServiceByIdMutation } from "../../redux/api/service.api";
import { toast } from "sonner";
import { TService, TServiceMappedData } from "../../types/service";
import { toTitleCase } from "../../utils";

type TProps = {
  deleteUser: boolean;
  setDeleteUser: any;
  serviceId: any;
  setServiceId: any;
  serviceData: TService[];
};
export const ServiceListTable = ({
  serviceData,
  deleteUser,
  setDeleteUser,
  setServiceId,
}: TProps) => {
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [deleteServiceId, setDeleteServiceId] = useState("");
  const [selectedService, setSelectedService] =
    useState<TServiceMappedData | null>(null);

  const [deleteService, { isLoading }] = useDeleteServiceByIdMutation();

  const columns: TableColumnsType<TServiceMappedData> = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
    },
    {
      title: "Image",
      dataIndex: "image",
      align: "center",
      render: (_text: string, record: TServiceMappedData) => (
        <div style={styles.imageContainer}>
          <img
            src={
              _text
                ? _text
                : "https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png"
            }
            alt={record.serviceName}
            style={styles.image}
          />
        </div>
      ),
    },
    {
      title: "Service Name",
      dataIndex: "serviceName",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (status) => (
        <div style={styles.statusContainer}>
          <div style={ status === "active" ? styles.statusBadge : styles.inActiveStatusBadge}>{toTitleCase(status)}</div>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (_text: string, _record: TServiceMappedData) => (
        <div style={styles.actionContainer}>
          <p
            style={styles.actionIcon}
            onClick={() => handleShowService(_record)}
          >
            <EyeOutlined style={styles.icon} />
          </p>
          <p style={styles.actionIcon}>
            <DeleteOutlined
              style={styles.iconDelete}
              onClick={() => {
                setDeleteUser(true);
                setDeleteServiceId(_record.key);
              }}
            />
          </p>
        </div>
      ),
    },
  ];

  const mappedServiceData: TServiceMappedData[] = serviceData.map(
    (service: TService, index: number) => ({
      key: service._id,
      serial: `#${index+1}`,
      image: service.image,
      serviceName: service.name,
      status: service.status,
      date: new Date(service.createdAt).toLocaleDateString(),
      action: "Edit",
    })
  );

  // handle functions here
  const handleShowService = (recordItem: TServiceMappedData) => {
    setOpenAccountDetail(true);
    console.log("_id when triggered button: " + recordItem.key);
    setServiceId(recordItem.key);
    setSelectedService(recordItem);
  };

  const handleDelete = async () => {
    if (!deleteServiceId) return;
    console.log({ deleteServiceId });

    try {
      const response = await deleteService(deleteServiceId).unwrap();
      console.log(response);

      toast.success(
        response.message ? response.message : "Deleted category service"
      );
    } catch (error: any) {
      toast.error(
        error.data.message ? error.data.message : "something went wrong!"
      );
    }
  };
  return (
    <>
      <Table<TServiceMappedData>
        columns={columns}
        dataSource={mappedServiceData}
        size="middle"
        style={styles.table}
      />

      <Modal
        centered
        open={openAccountDetail}
        onOk={() => setOpenAccountDetail(false)}
        onCancel={() => setOpenAccountDetail(false)}
        footer={null}
      >
        <ServiceItemViewCard serviceItem={selectedService!} />
      </Modal>
      <DeleteActionButtons
        open={deleteUser}
        onConfirm={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
        handleDelete={handleDelete}
        isLoading={isLoading}
      />
    </>
  );
};

// Style object
const styles = {
  table: {
    minHeight: "100vh",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: 100,
    border: "1px solid #CACACA",
  },
  statusContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statusBadge: {
    background: "#D6FEEB7D",
    padding: "4px 12px",
    borderRadius: "8px",
    border: "1px solid #deede3",
    color: "#498A6C",
    fontWeight: 700,
  },
  inActiveStatusBadge: {
    background: "#ffdcdc",
    padding: "4px 12px",
    borderRadius: "8px",
    border: "1px solid #ffdcdc",
    color: "#3d3d3d",
    fontWeight: 700,
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  actionIcon: {
    width: 24,
    height: 24,
    padding: 8,
    border: "1px solid #CACACA",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  icon: {
    color: "#010101",
  },
  iconDelete: {
    color: "red",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "#A011FF",
    textAlign: "center" as const,
  },
};

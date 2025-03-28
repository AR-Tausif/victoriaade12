import { Modal, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { EyeInvisibleOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { DataType } from "../../assets/data/data.account-details";
import { DeleteActionButtons } from "../cards/delete-action-card";
import ServiceItemViewCard from "../cards/service-item-view-card";
import { useDeleteServiceByIdMutation } from "../../redux/api/service.api";
import { toast } from "sonner";
import { TService } from "../../types/service";

type TProps = {
  deleteUser: any;
  setDeleteUser: any;
  serviceId: any;
  setServiceId: any;
  serviceData: TService[];
};
export const ServiceListTable = ({
  serviceData,
  deleteUser,
  setDeleteUser,
  serviceId,
  setServiceId,
}: TProps) => {
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [deleteServiceId, setDeleteServiceId] = useState("");
  const [selectedService, setSelectedService] = useState<TService | null>(null);

  const [deleteService, { isLoading, isSuccess }] =
    useDeleteServiceByIdMutation();

  const columns: TableColumnsType<DataType> = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
    },
    {
      title: "Image",
      dataIndex: "image",
      align: "center",
      render: (_text: string, record: DataType) => (
        <div style={styles.imageContainer}>
          <img
            src={
              _text
                ? _text
                : "https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png"
            }
            alt={record.name}
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
          <div style={styles.statusBadge}>{status}</div>
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
      render: (_text: string, _record: DataType) => (
        <div style={styles.actionContainer}>
          <p
            style={styles.actionIcon}
            onClick={() => handleShowService(_record.key.toString())}
          >
            <EyeInvisibleOutlined style={styles.icon} />
          </p>
          <p style={styles.actionIcon} onClick={() => setDeleteUser(true)}>
            <UserDeleteOutlined
              style={styles.iconDelete}
              onClick={() => setDeleteServiceId(_record.key.toString())}
            />
          </p>
        </div>
      ),
    },
  ];

  const mappedServiceData = serviceData.map(
    (service: TService, index: number) => ({
      key: service._id,
      serial: `#${index}`,
      image: service.image,
      serviceName: service.name,
      status: service.status,
      date: service.createdAt,
      action: "Edit",
    })
  );

  // handle functions here
  const handleShowService = (_id: string) => {
    setOpenAccountDetail(true);
    console.log("_id when triggered button: " + _id);
    setServiceId(_id);
  };

  const handleDelete = async () => {
    if (!deleteServiceId) return;
    console.log({ deleteServiceId });

    try {
      const response = await deleteService(deleteServiceId).unwrap();
      console.log(response);
      toast.success(
        response.data.message ? response.data.message : "successfully logged in"
      );
      setDeleteUser(false);
    } catch (error: any) {
      toast.error(
        error.data.message ? error.data.message : "something went wrong!"
      );
      setDeleteUser(false);
    }
  };
  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={mappedServiceData}
        size="middle"
        style={styles.table}
        onRow={(record) => ({
          onClick: () => {
            const clickedService = serviceData.find(
              (s) => s._id === record.key
            );
            setSelectedService(clickedService || null);
            setOpenAccountDetail(true);
          },
        })}
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
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #498A6C",
    color: "#498A6C",
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

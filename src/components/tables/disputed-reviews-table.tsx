import React, { useState } from "react";
import { Avatar, Table, TableColumnsType } from "antd";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { IUserDetails } from "../../types";
import { DeleteActionButtons } from "../cards/delete-action-card";
import { UserDetailsModal } from "../modals";
import { Link } from "react-router-dom";
import { titleCase } from "../../utils";
import { useAllDisputedReviewsQuery } from "../../redux/api/disputed-review.api";
import { TableSkeleton } from "../table-skeleton";
import { TReview, TUser } from "../../types/disputed-review";

export interface DisputedReviewDataType {
  key: React.Key;
  serial: string;
  reviewBy: string;
  provider: string;
  reason: string;
  status: string;
  action: string;
}

export type TMappedData = {
  key: string;
  serial: number;
  reviewBy: TUser;
  provider: TUser;
  reason: string;
  status: string; // approve and pending
  action: string;
  providerName?: string;
  providerProfile?: string;
  reviewerName?: string;
  reviewerProfile?: string;
};

export const DisputedReviewsTable = () => {
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [modalShowUser] = useState<IUserDetails | null>(null);

  // RTK: fetching data from server
  const { data, isLoading } = useAllDisputedReviewsQuery("");

  // const handleUserShow = (data:any) => {
  //   const user = userArray.find(
  //     (user, index) => index === Number(data.record.key)
  //   );
  //   if (user) {
  //     setModalShowUser(user);
  //     setOpenAccountDetail(true);
  //   }
  // };

  const mappedData: any = data?.data?.data.map(
    (review: TReview, index: number) => ({
      key: review._id,
      serial: `#${index}`,
      reviewBy: "review.reviewBy",
      provider: "review.provider",
      reason: review.reason,
      status: review.status,
      providerName: review.provider.name,
      providerProfile: review.provider.photo,
      reviewerName: review.reviewBy.name,
      reviewerProfile: review.reviewBy.photo,
      action: "Edit",
    })
  );

  console.log({ mappedData });

  const columns: TableColumnsType<DisputedReviewDataType> = [
    { title: "Serial", dataIndex: "serial", align: "center" },
    {
      title: "Review by",
      dataIndex: "reviewBy",
      align: "center",
      render: (_: string, record: any) => (
        <div
          className="name-cell"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Avatar
            src={
              record?.reviewerProfile
                ? record.reviewerProfile
                : "https://res.cloudinary.com/dyalzfwd4/image/upload/v1738207704/user_wwrref.png"
            }
            size={32}
          >
            {"CN"}
          </Avatar>
          <span>{record?.reviewerName}</span>
        </div>
      ),
    },
    {
      title: "Provider",
      dataIndex: "provider",
      align: "center",
      render: (_: string, record: any) => (
        <div
          className="name-cell"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Avatar
            src={
              record?.providerProfile
                ? record.providerProfile
                : "https://res.cloudinary.com/dyalzfwd4/image/upload/v1738207704/user_wwrref.png"
            }
            size={32}
          >
            {"CN"}
          </Avatar>
          <span>{record?.providerName}</span>
        </div>
      ),
    },
    { title: "Reason", dataIndex: "reason", align: "center" },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (text: string) =>
        text.toLowerCase() == "approved" ? (
          <p style={{ fontWeight: 600, color: "#A011FF" }}>
            {titleCase(text)}{" "}
          </p>
        ) : (
          <p style={{ fontWeight: 600, color: "#F7B814" }}>
            {" "}
            {titleCase(text)}{" "}
          </p>
        ),
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (text, record) => renderActions(text, record),
    },
  ];

  return (
    <>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <Table<DisputedReviewDataType>
          columns={columns}
          dataSource={mappedData}
          size="middle"
          style={styles.table}
        />
      )}
      <UserDetailsModal
        open={openAccountDetail}
        onClose={() => setOpenAccountDetail(false)}
        user={modalShowUser}
      />
      <DeleteActionButtons
        handleDelete={() => {}}
        open={deleteUser}
        onConfirm={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
      />
    </>
  );

  function renderActions(__: any, record: any) {
    return (
      <div style={styles.actionContainer}>
        <Link to={`/disputed-reviews/${record?.key}`}>
          <p style={styles.actionIcon}>
            <EyeInvisibleOutlined style={styles.icon} />
          </p>
        </Link>
      </div>
    );
  }
};

// Styles
const styles = {
  table: {
    minHeight: "100vh",
  },
  flexCenter: {
    padding: "0 0 0 100px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    border: "1px solid #CACACA",
  },
  name: {
    marginLeft: 8,
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
  },
  icon: {
    color: "#010101",
  },
  deleteIcon: {
    color: "red",
  },
};

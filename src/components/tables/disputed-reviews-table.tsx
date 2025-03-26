import React, { useState } from "react";
import { Table, TableColumnsType } from "antd";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { IUserDetails } from "../../types";
import { DeleteActionButtons } from "../cards/delete-action-card";
import { UserDetailsModal } from "../modals";
import { Link } from "react-router-dom";
import { titleCase } from "../../utils";
import { useAllDisputedReviewsQuery } from "../../redux/api/disputed-review.api";

export interface DisputedReviewDataType {
  key: React.Key;
  serial: string;
  reviewBy: string;
  provider: string;
  reason: string;
  status: string;
  action: string;
}

interface IDisputedReview {
  _id: string;
  seller: string;
  reviewId: string;
  reason: string;
  photos: string[];
  explanation: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
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

  const columns: TableColumnsType<DisputedReviewDataType> = [
    { title: "Serial", dataIndex: "serial", align: "center" },
    {
      title: "Review by",
      dataIndex: "reviewBy",
      align: "center",
      render: renderName,
    },
    { title: "Provider", dataIndex: "provider", align: "center" },
    { title: "Reason", dataIndex: "reason", align: "center" },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (text: string, _record) =>
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

  const mappedData = data?.data?.data.map(
    (review: IDisputedReview, index: number) => ({
      key: review._id,
      serial: `#${index}`,
      reviewBy: review.reviewId,
      provider: review.seller,
      reason: review.reason,
      status: review.status,
      action: "Edit",
    })
  );

  return (
    <>
      <Table<DisputedReviewDataType>
        columns={columns}
        dataSource={mappedData}
        size="middle"
        style={styles.table}
      />
      <UserDetailsModal
        open={openAccountDetail}
        onClose={() => setOpenAccountDetail(false)}
        user={modalShowUser}
      />
      <DeleteActionButtons
        open={deleteUser}
        onConfirm={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
      />
    </>
  );

  function renderName(_text: string, record: DisputedReviewDataType) {
    return (
      <div style={styles.flexCenter}>
        <img
          src="https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png"
          alt={record.provider}
          style={styles.avatar}
        />
        <h4 style={styles.name}>{record.provider}</h4>
      </div>
    );
  }

  function renderActions(text, record: DataType) {
    console.log(text, record);

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

import React from "react";
import { Modal } from "antd";
import { ProfileDetailsViewCard } from "../cards";
import { ITableUser, IUserDetails } from "../../types";

interface UserDetailsModalProps {
  open: boolean;
  onClose: () => void;
  user: ITableUser | null;
}

export const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ open, onClose, user }) => {
  return (
    <Modal
      centered
      open={open}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
    >
      <ProfileDetailsViewCard user={user as ITableUser} isNoneClose={true} />
    </Modal>
  );
};

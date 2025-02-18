import React from "react";
import { Modal } from "antd";
import { ProfileDetailsViewCard } from "../cards";
import { IUserDetails } from "../../types";

interface UserDetailsModalProps {
  open: boolean;
  onClose: () => void;
  user: IUserDetails | null;
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
      <ProfileDetailsViewCard user={user as IUserDetails} isNoneClose={true} />
    </Modal>
  );
};

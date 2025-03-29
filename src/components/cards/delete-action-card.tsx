import React from "react";
import { Button, Modal } from "antd";
import { PrimaryButton } from "../primary-button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ActionButtonsProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  handleDelete: () => void;
  isLoading?: boolean;
}

export const DeleteActionButtons: React.FC<ActionButtonsProps> = ({
  open,
  onConfirm,
  onCancel,
  handleDelete,
  isLoading,
}) => {
  const deleteAction = async () => {
    try {
      await handleDelete();
      onConfirm();
    } catch (error: any) {
      console.error("Error deleting user:", error);
      toast.error(
        error.data.message
          ? error.data.message
          : "Failed to delete user. Please try again."
      );
    }
  };

  return (
    <Modal
      centered
      open={open}
      onOk={onConfirm}
      onCancel={onCancel}
      footer={null}
    >
      <div style={styles.container}>
        <h3 style={styles.title}>Are You Sure!</h3>
        <p>Do you want to delete this User?</p>
        {isLoading ? (
          <PrimaryButton type="submit" styles={{ width: "100%" }} disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          </PrimaryButton>
        ) : (
          <Button style={styles.confirmButton} onClick={() => deleteAction()}>
            Confirm
          </Button>
        )}
      </div>
    </Modal>
  );
};

// Styles for ActionButtons
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center" as const,
    flexDirection: "column" as const,
    gap: 20,
    textAlign: "center" as const,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#A011FF",
  },
  confirmButton: {
    backgroundImage: "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
    color: "#fdfdfd",
    width: "50%",
  },
};

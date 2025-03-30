import { Loader2, Trash2 } from "lucide-react";
import { MapDotIcon } from "../icons";
import { CircledSpinner } from "../skeletons";
import { Button, Modal } from "antd";
import { PrimaryButton } from "../primary-button";

export const PostHeadIntroBox = ({
  user,
  handleDeletepost,
  isLoading,
  open,
  setOpen,
}: {
  user: any;
  handleDeletepost: any;
  isLoading: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex gap-2.5">
          <img
            src={user.profileImage}
            alt="profile picture"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="user-details">
            <h5 className="font-semibold text-sm">{user.firstName}</h5>
            <div className="flex gap-1 text-xs">
              <p className="mt-0.5">
                <MapDotIcon size="11.10" />
              </p>
              <p className="font-bold">123/A- {user.city}</p>
            </div>
          </div>
        </div>
        <p>
          {isLoading ? (
            <CircledSpinner />
          ) : (
            <Trash2
              onClick={() => setOpen(!open)}
              className="text-md text-[#ef4444]"
            />
          )}
        </p>
      </div>

      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        footer={null}
      >
        <div style={styles.container}>
          <h3 style={styles.title}>Are You Sure!</h3>
          <p>Do you want to delete this Post?</p>
          {isLoading ? (
            <PrimaryButton type="submit" styles={{ width: "100%" }} disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </PrimaryButton>
          ) : (
            <Button
              style={styles.confirmButton}
              onClick={() => handleDeletepost()}
            >
              Confirm
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};

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

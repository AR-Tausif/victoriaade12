import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { CreateServiceCard, SubscriptionCard } from "../components";
import { UpdateSubsPlanForm } from "../components/forms";

export function ManageSubscription() {
  const [openResponsive, setOpenResponsive] = useState(false);
  const [openSubsPlanModal, setOpenSubsPlanModal] = useState(false);

  return (
    <div>
      <div>
        <div style={styles.addButton} onClick={() => setOpenResponsive(true)}>
          <PlusCircleOutlined style={styles.icon} />
          <p>Add new subscirption plan</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <SubscriptionCard
          setOpenSubsPlanModal={setOpenSubsPlanModal}
        openSubsPlanModal={openSubsPlanModal}
        
          />
          <SubscriptionCard
         
          />
        </div>
      </div>
      <Modal
        centered
        open={openResponsive}
        onOk={() => setOpenResponsive(false)}
        onCancel={() => setOpenResponsive(false)}
        width={styles.modalWidth}
        footer={null}
      >
        <CreateServiceCard />
      </Modal>
      <Modal
        centered
        open={openSubsPlanModal}
        onOk={() => setOpenSubsPlanModal(false)}
        onCancel={() => setOpenSubsPlanModal(false)}
        width={styles.modalWidth}
        footer={null}
      >
        <UpdateSubsPlanForm/>
      </Modal>
    </div>
  );
}

const styles = {
  addButton: {
    background: "#A011FF",
    width: "100%",
    padding: "13px 30px",
    color: "#FDFDFD",
    fontWeight: 600,
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 8,
    marginBottom: 32,
  },
  icon: {
    color: "#FDFDFD",
    fontSize: 37,
  },
  modalWidth: {
    xs: "90%",
    sm: "80%",
    md: "70%",
    lg: "60%",
    xl: "50%",
    xxl: "40%",
  },
};

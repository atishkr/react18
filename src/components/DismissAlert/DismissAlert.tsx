import React, { ReactNode, useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./DismissAlert.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const DismissAlert = ({ children, onClose }: Props) => {
  return (
    <>
      <div
        className={[
          styles.alert,
          styles.alertWarning,
          styles.alertDismissible,
        ].join(" ")}
      >
        {children}
        <IoMdClose onClick={onClose} className={styles.closeButton} />
      </div>
    </>
  );
};

export default DismissAlert;

import styles from "./Button.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: "primary" | "secondry" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <button
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

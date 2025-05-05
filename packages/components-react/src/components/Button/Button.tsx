import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick: () => void;
};

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

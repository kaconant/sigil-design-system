import React, { forwardRef } from "react";
import styles from "./Button.module.css";
import { visuallyHidden } from "@/utils/classnames";

// A button’s job is to initiate an action, not reflect status.

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // prevents accidental form submission
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      variant = "primary",
      size = "medium",
      disabled = false,
      loading = false,
      type = "button",
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const ariaLabel = loading ? "Loading" : undefined;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }
      onClick?.();
    };

    return (
      <>
        <span role="status" aria-live="polite" className={visuallyHidden}>
          {loading ? "Loading" : ""}
        </span>
        <button
          ref={ref}
          type={type}
          className={`${styles.button} ${styles[variant]} ${styles[size]} ${
            loading ? styles.loading : ""
          }`}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          aria-label={ariaLabel}
          aria-busy={loading}
          onClick={handleClick}
        >
          {children}
        </button>
      </>
    );
  }
);

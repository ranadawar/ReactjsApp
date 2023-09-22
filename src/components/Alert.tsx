import React from "react";

interface Props {
  children: string;
  onPress: () => void;
}

function Alert({ children, onPress }: Props) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onPress}
      ></button>
    </div>
  );
}

export default Alert;

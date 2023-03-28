// rafce snippet - react arrow function component export
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // children of type ReactNode allows html elements (like span) to be passed in
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      ',
    </div>
  );
};

export default Alert;

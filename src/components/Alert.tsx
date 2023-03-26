// rafce snippet - react arrow function component export
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // children of type ReactNode allows html elements (like span) to be passed in
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-warning" role="alert">
      {children}
    </div>
  );
};

export default Alert;

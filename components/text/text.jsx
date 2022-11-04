import react from "react";
import css from "./text.module.css";

export const Text = ({ children }) => {
  return (
    <p className={css.text}>
      {children}
    </p>
  );
};

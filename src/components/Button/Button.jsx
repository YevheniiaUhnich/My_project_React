import clsx from "clsx";
import s from "./Button.module.css";

export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(s.btn, {
        [s.isSelected]: selected,
      })}
      type={type}
      {...otherProps}>
      {children}
    </button>
  );
};

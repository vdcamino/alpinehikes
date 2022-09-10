import classes from "./Button.module.css";

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  return (
    <button className={classes.btn} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

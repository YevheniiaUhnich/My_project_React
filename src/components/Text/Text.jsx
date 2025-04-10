import s from "./Text.module.css";
const Text = ({ children, textAlign = "", marginBottom = "0" }) => {
  return (
    <p
      className={[
        s["text"],
        s[textAlign],
        s[`marginBottom${marginBottom}`],
      ].join("")}>
      {children}
    </p>
  );
};

export default Text;

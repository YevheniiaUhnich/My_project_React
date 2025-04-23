import { MdErrorOutline } from "react-icons/md";

const Error = () => {
  return (
    <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
      <MdErrorOutline size={40} />
      Oops! Something went wrong. Please try again!
    </p>
  );
};
export default Error;

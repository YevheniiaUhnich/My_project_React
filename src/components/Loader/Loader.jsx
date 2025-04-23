import { BulletList } from "react-content-loader";

const Loader = () => (
  <BulletList
    height={140}
    speed={1}
    backgroundColor={"#C0C0C0"}
    foregroundColor={"#C0C0C0"}
    viewBox="0 0 380 70">
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="35" height="35" />
    <rect x="80" y="17" rx="4" ry="4" width="150" height="7" />
    <rect x="80" y="40" rx="3" ry="3" width="125" height="5" />
  </BulletList>
);
export default Loader;

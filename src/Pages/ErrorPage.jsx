import { Link } from "react-router-dom";
import hunter from "../assets/hunter.png";

export const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="/">HOME</Link>
      <h1>IMPROPER INPUT</h1>
      <img src={hunter} style={{ height: "60vh" }} />
    </div>
  );
};

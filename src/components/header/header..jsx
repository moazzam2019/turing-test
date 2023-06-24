import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="container-fluid header">
      <div className="logo-container">
        <img src="images/logo.png" alt="Turing Tech Logo" className="logo" />
      </div>
    </div>
  );
};

export default Header;

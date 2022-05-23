import logo from "../assets/images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo_content">
        <img src={logo} alt="company logo" className="header_logo" />
        <h2>website name</h2>
      </div>

      <input label="search" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

export default Header;

import logo from "../assets/images/logo.png";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="Header">
      <div className="header_logo">
        <h2>EbeNFT CMS</h2>
      </div>

      <div className="header_search">
        <SearchIcon />
        <input label="search" placeholder="Search" />
      </div>
      <button className="header_button">Search</button>
    </div>
  );
};

export default Header;

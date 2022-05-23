import logo from "../assets/images/logo.png";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="Header">
      <div className="header_logo">
        <h2>EbeNFT CMS</h2>
      </div>

      <div className="header_search">
        {/* <TextField
          id="input-with-icon-textfield"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        /> */}
        <SearchIcon />
        <input label="search" placeholder="Search" />
      </div>

      <div className="header_button">
        <Button variant="contained" className="submit_button">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Header;

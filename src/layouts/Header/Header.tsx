import { AiOutlineSearch } from "react-icons/ai";
import { Switch } from "@mui/material";
import { red } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import "./Header.css";

const RedSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: red[600],
    "&:hover": {
      backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: red[600],
  },
}));

const Header = () => {
  return (
    <header className="header">
      {/* Search Bar */}
      <div className="search-bar">
        {/* Search Icon */}
        <AiOutlineSearch className="search-bar__icon" />

        {/* Search Input */}
        <input type="text" className="search-bar__input" placeholder="Search" />
      </div>
      {/* Light/Dark Mode Button */}
      <RedSwitch />
    </header>
  );
};

export default Header;

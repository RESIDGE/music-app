import { BiRadio, BiTrendingUp } from "react-icons/bi";
import { FaMusic } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  browse,
  radio,
  selectSideBarLink,
  trending,
} from "../../redux/sidebar/sidebarSlice";
import logo from "../../assets/flow-logo.svg";
import "./SideBar.css";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const linkSelection = useAppSelector(selectSideBarLink);

  return (
    <nav className="side-bar">
      {/* Logo */}
      <div className="side-bar__logo">
        <img src={logo} alt="" className="logo" />
      </div>
      {/* Links */}
      <div className="side-bar__links">
        {/* Browse Link */}
        <NavLink
          to="/"
          className={`link ${
            linkSelection === "browse" ? "link--highlight" : ""
          }`}
          onClick={() => dispatch(browse())}
        >
          <FaMusic />
          Browse
        </NavLink>
        {/* Radio Link */}
        <NavLink
          to="/radio"
          className={`link ${
            linkSelection === "radio" ? "link--highlight" : ""
          }`}
          onClick={() => dispatch(radio())}
        >
          <BiRadio />
          Radio
        </NavLink>
        {/* Trending Link */}
        <NavLink
          to="/trending"
          className={`link ${
            linkSelection === "trending" ? "link--highlight" : ""
          }`}
          onClick={() => dispatch(trending())}
        >
          <BiTrendingUp />
          Trending
        </NavLink>
      </div>
    </nav>
  );
};

export default SideBar;

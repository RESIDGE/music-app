import { AiFillHome } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { FaMusic } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  browse,
  home,
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
        {/* Home Link */}
        <NavLink
          to="/"
          className={`link ${
            linkSelection === "home" ? "link--highlight" : ""
          }`}
          onClick={() => dispatch(home())}
        >
          <AiFillHome />
          Home
        </NavLink>
        {/* Browse Link */}
        <NavLink
          to="/browse"
          className={`link ${
            linkSelection === "browse" ? "link--highlight" : ""
          }`}
          onClick={() => dispatch(browse())}
        >
          <FaMusic />
          Browse
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

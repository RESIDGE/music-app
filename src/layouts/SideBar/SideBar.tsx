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
import "./SideBar.css";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const linkSelection = useAppSelector(selectSideBarLink);

  return (
    <nav className="side-bar">
      <div className="side-bar__logo">
        <h1 className="logo">Logo</h1>
      </div>
      <div className="side-bar__links">
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

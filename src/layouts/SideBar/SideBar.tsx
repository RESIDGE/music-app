import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaMusic } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import "./SideBar.css";

const SideBar = () => {
  return (
    <nav className="side-bar">
      <div className="side-bar__logo">
        <h1 className="logo">Logo</h1>
      </div>
      <div className="side-bar__links">
        <NavLink to="/" className="link">
          <AiFillHome />
          Home
        </NavLink>
        <NavLink to="/browse" className="link">
          <FaMusic />
          Browse
        </NavLink>
        <NavLink to="/trending" className="link">
          <BiTrendingUp />
          Trending
        </NavLink>
      </div>
    </nav>
  );
};

export default SideBar;

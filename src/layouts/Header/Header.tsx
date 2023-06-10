import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";

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
      <label className="switch">
        <input type="checkbox" className="switch__input" />
        <span className="switch__slider switch__slider--round"></span>
      </label>
    </header>
  );
};

export default Header;

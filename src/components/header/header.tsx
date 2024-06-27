import "./header.scss";

import TopBar from "./top-bar/top-bar";
import CategoryBar from "./category-bar/category-bar";
import SearchBar from "./search-bar/search-bar";

const Header = () => {
  return (
    <header className="header-container">
      <TopBar />
      <div className="divider" />
      <SearchBar />
      <div className="divider" />
      <CategoryBar />
    </header>
  );
};

export default Header;

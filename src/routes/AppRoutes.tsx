import { Routes, Route } from "react-router-dom";
import { Browse, Genre, Home, Trending } from "../pages/index";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Home Component */}
        <Route path="/" element={<Home />} />
        {/* Browse Component (genre selector) */}
        <Route path="/browse" element={<Browse />} />
        {/* Genre Component (:name = genre name) */}
        <Route path="/genre/:name" element={<Genre />} />
        {/* Trending Component (top 10 for albums, artists, and tracks) */}
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

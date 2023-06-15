import { Routes, Route } from "react-router-dom";
import { Browse, Genre, Radio, Trending } from "../pages/index";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Browse Component (genre selector) */}
        <Route path="/" element={<Browse />} />
        {/* Genre Component (:name = genre name) */}
        <Route path="/genre/:genreId" element={<Genre />} />
        {/* Radio Component */}
        <Route path="/radio" element={<Radio />} />
        {/* Trending Component (top 10 for albums, artists, and tracks) */}
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

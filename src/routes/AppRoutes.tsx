import { Routes, Route } from "react-router-dom";
import { Artist, Browse, Genre, Radio, Trending } from "../pages/index";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Browse Component (genre selector) */}
        <Route path="/" element={<Browse />} />
        {/* Error Component(s) */}
        {/* <Route path="/error/403" element={<Error403 />} />
        <Route path="/error/500" element={<Error500 />} /> */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
        {/* Radio Component */}
        <Route path="/radio" element={<Radio />} />
        {/* Trending Component (top 10 for albums, artists, and tracks) */}
        <Route path="/trending" element={<Trending />} />
        {/* Artist Component (:artistId = artist id) */}
        <Route path="/artist/:artistId" element={<Artist />} />
        {/* Genre Component (:genreId = genre id) */}
        <Route path="/genre/:genreId" element={<Genre />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

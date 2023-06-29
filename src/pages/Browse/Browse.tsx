import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchGenres, selectGenres } from "../../redux/browse/browseSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./Browse.css";

const Browse = () => {
  const dispatch = useAppDispatch();
  const genresSelector = useAppSelector(selectGenres);

  console.log(import.meta.env.VITE_URI);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className="browse-content">
      {genresSelector.map((genre: Record<string, string>) => (
        <div key={genre.id} className="genre">
          <NavLink to={`/genre/${genre.id}`}>
            <img src={genre.picture_medium} alt="" className="genre-image" />
          </NavLink>
          <span className="genre-title">{genre.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Browse;

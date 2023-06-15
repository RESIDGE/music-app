import { useEffect } from "react";
import { fetchGenres, selectGenres } from "../../redux/browse/browseSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./Browse.css";

const Browse = () => {
  const dispatch = useAppDispatch();
  const genresSelector = useAppSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);
  return (
    <div className="browse-content">
      {genresSelector.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
      <p>a</p>
    </div>
  );
};

export default Browse;

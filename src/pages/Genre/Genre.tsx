import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchArtistsByGenreID,
  selectGenreArtists,
} from "../../redux/genre/genreSlice";
import "./Genre.css";

type GenreIDParams = {
  genreId: string;
};

const Genre = () => {
  const dispatch = useAppDispatch();
  const genreArtistsSelector = useAppSelector(selectGenreArtists);
  const { genreId } = useParams<GenreIDParams>();

  useEffect(() => {
    if (genreId) {
      dispatch(fetchArtistsByGenreID(genreId));
    } else {
      throw Error("Invalid genre ID");
    }
  }, [dispatch, genreId]);

  console.log(genreArtistsSelector);

  return (
    <div className="genre-artists-content">
      {genreArtistsSelector.map((artist: Record<string, string>) => (
        <div key={artist.id} className="genre-artist">
          <NavLink to={`/artist/${artist.id}`} className="genre-artist-link">
            <img
              src={artist.picture_medium}
              alt=""
              className="genre-artist-image"
            />
          </NavLink>
          <span className="genre-artist-title">{artist.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Genre;

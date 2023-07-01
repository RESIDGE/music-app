import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React, { useEffect } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchArtist,
  fetchArtistAlbums,
  fetchArtistPlaylists,
  fetchArtistRadio,
  fetchArtistRelated,
  fetchArtistTop,
  selectAlbums,
  selectArtist,
  selectPlaylists,
  selectRadio,
  selectRelated,
  selectTopTracks,
} from "../../redux/artist/artistSlice";
import "./Artist.css";

type ArtistIDParams = {
  artistId: string;
};

const Artist = () => {
  const { artistId } = useParams<ArtistIDParams>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const albumsSelector = useAppSelector(selectAlbums);
  const artistSelector = useAppSelector(selectArtist);
  const playlistsSelector = useAppSelector(selectPlaylists);
  const radioSelector = useAppSelector(selectRadio);
  const relatedArtistsSelector = useAppSelector(selectRelated);
  const topTracksSelector = useAppSelector(selectTopTracks);

  useEffect(() => {
    if (artistId) {
      dispatch(fetchArtistAlbums(artistId));
      dispatch(fetchArtist(artistId));
      dispatch(fetchArtistPlaylists(artistId));
      dispatch(fetchArtistRadio(artistId));
      dispatch(fetchArtistRelated(artistId));
      dispatch(fetchArtistTop(artistId));
    } else {
      navigate("/error/500");
    }
  }, [artistId, dispatch, navigate]);

  return (
    <div className="artist-content">
      {/* Artist Picture and Name */}
      <div className="artist-banner">
        <img
          src={artistSelector.picture_medium}
          alt=""
          className="artist-image"
        />
        <div className="artist-caption">
          <span className="artist-title">{artistSelector.name}</span>
          <span className="artist-fan-count">
            {artistSelector.nb_fan
              ? `${artistSelector.nb_fan.toLocaleString()} fans`
              : ""}
          </span>
        </div>
      </div>
      {/* Artist Top 5 Tracks */}
      <div className="top-tracks">
        <h1>Top Tracks</h1>
        <div className="tracks-container">
          {topTracksSelector.map((track, index) => (
            <div key={track.id} className="track">
              <div className="track-left-container">
                <BiPlay size={30} />
                <img src={track.album.cover_small} alt="" />
                <div className="track-desc">
                  <span>{`${index + 1}. ${track.title}`}</span>
                </div>
              </div>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <MoreHorizIcon {...bindTrigger(popupState)} />
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>
                        Add to queue
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          ))}
        </div>
      </div>
      {/* Artist's Albums */}
      <div className="artist-albums">
        <h1>Albums</h1>
      </div>
      {/* Artist Playlists */}
      <div className="artist-playlists"></div>
      {/* Artist Radio */}
      <div className="artist-radio"></div>
      {/* Related Artists */}
      <div className="related-artists"></div>
    </div>
  );
};

export default Artist;

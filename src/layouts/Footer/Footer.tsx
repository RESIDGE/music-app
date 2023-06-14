import { BiSkipNext, BiPlay, BiSkipPrevious, BiPause } from "react-icons/bi";
import { HiOutlineViewList } from "react-icons/hi";
import { Slider, Stack } from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Container */}
      <div className="left-container">
        {/* Previous Track Button */}
        <BiSkipPrevious className="track-utility-button" />
        {/* Play/Pause Button */}
        <BiPlay className="track-utility-button" />
        {/* Next Track Button */}
        <BiSkipNext className="track-utility-button" />
      </div>
      {/* Middle Container */}
      <div className="middle-container">
        {/* Middle-Top Container */}
        <div className="middle-top-container">
          {/* Track Title */}
          <span>Title</span>
          {/* Track Artist(s) */}
          <span>-</span>
          <span>Artist(s)</span>
        </div>
        {/* Middle-Bottom Container */}
        <div className="middle-bottom-container">
          {/* Current Track Timestamp */}
          <span>00:00</span>
          {/* Slider */}
          <Slider sx={{ color: "red" }} defaultValue={0} />
          {/* Duration Time */}
          {/* Total Track Time (30 seconds globally for all track previews) */}
          <span>00:30</span>
        </div>
      </div>
      {/* Right Container */}
      <div className="right-container">
        {/* Queue Button */}
        <HiOutlineViewList className="track-utility-button" />
        {/* Volume Controller */}
        <Stack alignItems="center" direction="row" spacing={2} sx={{ flex: 1 }}>
          <VolumeDown />
          <Slider sx={{ color: "red" }} />
          <VolumeUp />
        </Stack>
      </div>
    </footer>
  );
};

export default Footer;

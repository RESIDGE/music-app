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
        <div>
          {/* Track Title */}
          Title
          {/* Track Artist(s) */}
          Artists
        </div>
        {/* Middle-Bottom Container */}
        <div>
          {/* Duration Time */}
          {/* Total Track Time (30 seconds globally for all track previews) */}
          Duration Slider
        </div>
      </div>
      {/* Right Container */}
      <div className="right-container">
        {/* Queue Button */}
        <HiOutlineViewList className="track-utility-button" />
        {/* Volume Controller */}
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
          sx={{ flex: 1, pr: 1 }}
        >
          <VolumeDown />
          <Slider sx={{ color: "red" }} />
          <VolumeUp />
        </Stack>
      </div>
    </footer>
  );
};

export default Footer;

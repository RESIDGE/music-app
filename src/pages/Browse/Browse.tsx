import { getGenres } from "../../lib/index";
import { useEffect } from "react";
import "./Browse.css";

const Browse = () => {
  useEffect(() => {
    getGenres().then((response) => console.log(response));
  }, []);

  return <div className="browse-content">Browse</div>;
};

export default Browse;

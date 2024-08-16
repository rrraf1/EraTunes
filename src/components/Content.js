import { useState } from "react";
import useSpotifyAuth from "../hooks/Token";
import Dropdown from "./Dropdown";
import { Playlist } from "../data/Playlist";
import Tilt from "react-parallax-tilt";

function Content() {
  const { token } = useSpotifyAuth();
  const [tokenPlaylist, setTokenPlaylist] = useState(null);

  const handleDropdownSubmit = (selectedYear) => {
    const selectedToken = Playlist.get(selectedYear);
    if (selectedToken) {
      const cleanedToken = selectedToken.replace(/\s+/g, "");
      setTokenPlaylist(cleanedToken);  // Set the token directly without fetching data
    }
  };

  return (
    <div className="container">
      {token ? (
        <Dropdown onSubmit={handleDropdownSubmit} />
      ) : (
        <>
          <span className="slogan header">
            <h1 className="slogan__text text-1">Embrace</h1>
            <h1 className="slogan__text text-2">the Beat of</h1>
            <h1 className="slogan__text text-3">yesterday</h1>
          </span>
          <span className="description">
            <h4 className="description__text">
              Let the music transport you <br />
              to a different era.
            </h4>
          </span>
        </>
      )}
      {tokenPlaylist && (
        <div className="card-container">
          <Tilt className="tilt" tiltEnable={false} glareEnable reset={true} glareMaxOpacity={0.3} glareBorderRadius={"15px"}>
            <iframe
              title="Spotify Embed: Recommendation Playlist"
              src={`https://open.spotify.com/embed/playlist/${tokenPlaylist}?utm_source=generator&theme=0`}
              style={{ minHeight: "360px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Tilt>
        </div>
      )}
    </div>
  );
}

export default Content;

import { Button } from "@mui/material";
import useSpotifyAuth from "../hooks/Token"; 
function Navbar() {
  const { token, logout, loginUrl } = useSpotifyAuth();

  return (
    <nav style={{ zIndex: 2, position: "absolute", top: 10, right: 0 }}>
      {token ? (
        <Button className="logout-btn" onClick={logout}>
          Logout
        </Button>
      ) : (
        <a href={loginUrl} className="login-btn">
          Login to Spotify
        </a>
      )}
    </nav>
  );
}

export default Navbar;

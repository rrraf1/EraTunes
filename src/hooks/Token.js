import { useEffect, useState } from "react";

const useSpotifyAuth = () => {
  const CLIENT_ID = "cfecfb000bfc4bc4b7e4cb756fb1285b";
  const REDIRECT_URL = "https://era-tunes.vercel.app/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    } else {
      setToken(token);
    }
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    window.location.reload()
  };

  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`;

  return { token, logout, loginUrl };
};

export default useSpotifyAuth;

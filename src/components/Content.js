import useSpotifyAuth from "../hooks/Token";

function Content() {
  const { token } = useSpotifyAuth();

  return (
    <div className="container">
      {token ? (
        <h1>Thankyou for joining us!</h1>
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
    </div>
  );
}

export default Content;

import { useEffect, useState } from "react";
import { fetchPlaylistByQuery } from "../services/fetchVideos";
import { Button, Form } from "react-bootstrap";

const PlaylistContainer = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [input, setInput] = useState("");

  const downloadData = () => {
    setIsClicked(true);
  };

  const handleOnInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetchPlaylistByQuery(input);
      setPlaylist(res.items || []);
    }
    if (isClicked) {
      fetchAPI();
      setIsClicked(false);
    }
  });

  return (
    <>
      <div>
        <Form.Label htmlFor="inputPassword5">Wpisz fraze</Form.Label>
        <Form.Control
          type="text"
          aria-describedby="test"
          onInput={handleOnInput}
        />
        <Button variant="info" onClick={downloadData}>
          Download
        </Button>
      </div>
      <div>
        {playlist.length ? (
          playlist.map((p) => (
            <p class="fs-4">
              {p.snippet.channelTitle}
              <img src={p.snippet.thumbnails.default.url} />
            </p>
          ))
        ) : (
          <p class="fs-2">Brak danych</p>
        )}
      </div>
    </>
  );
};

export default PlaylistContainer;

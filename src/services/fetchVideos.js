import axios from "axios";
import { BASE_URL, YT_API_KEY } from "./constans";

export const fetchChannels = async () => {
  try {
    const { data } = axios(
      `${BASE_URL}/channels?part=statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${YT_API_KEY}`
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchVideos = async () => {
  const { data } =
    await axios(`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${YT_API_KEY}
      &part=snippet,contentDetails,statistics,status`);

  return data;
};

export const fetchChannel = async () => {
  const { data } =
    await axios(`https://youtube.googleapis.com/youtube/v3/search?channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${YT_API_KEY}
        `);

  return data;
};

export const fetchPlaylistByQuery = async (query) => {
  const { data } =
    await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=playlist&key=${YT_API_KEY}`
      );

  return data;
};

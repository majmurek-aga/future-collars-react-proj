import { useEffect } from "react";
import {
  fetchChannels,
  fetchChannel,
  fetchVideos,
} from "../services/fetchVideos";

const Channels = () => {
  useEffect(() => {
    fetchChannels();
    fetchVideos();
    fetchChannel();
  }, []);

  return <></>;
};

export default Channels;

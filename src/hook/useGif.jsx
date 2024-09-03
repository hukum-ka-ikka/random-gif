import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const gifSource = tag ? `${url}&tag=${tag}` : url;
    const response = await axios.get(gifSource);
    const gifurl = await response.data.data.images.downsized_large.url;
    setGif(gifurl);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;

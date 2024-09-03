import axios from "axios";
import React, { useEffect, useState } from "react";
import useGif from "../hook/useGif";

const Tag = () => {
  const [tag, setTag] = useState('Basketball');

  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className="flex flex-col bg-blue-600 items-center justify-around rounded-lg py-4 h-[50vh] w-[80vw] md:w-[40vw]">
      <h1 className="text-xl underline font-bold">A RANDOM GIF</h1>
      {
        loading ? <div className="custom-loader"></div> : <img src={gif} className="h-[60%] w-[60%]"/>
      }

      <input 
        onChange={(event) => setTag(event.target.value)}
        className="rounded-md text-center"
        value={tag}
      />
      
      <button onClick={() => fetchData()} className="bg-blue-500 w-[40%] rounded-md p-0.5">
        Generate
      </button>
    </div>
  );
};

export default Tag;

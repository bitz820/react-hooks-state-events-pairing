import React from "react";
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer"
import LikesButtons from "./LikesButtons.js";
import CommentToggle from "./CommentToggle.js";



function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoPlayer data={video} />
      <LikesButtons data={video} />
      <CommentToggle data={video} />
    </div>
  );
}

export default App;

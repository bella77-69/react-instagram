import React, { useState, useEffect } from "react";
import Post from "./components/post/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "james",
      caption: "This is a caption",
      imageUrl:
        "https://images.unsplash.com/photo-1593642533141-7d8a7d6d6f5a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "godtello",
      caption: "Oh, I'm a God!",
      imageUrl:
        "https://images.unsplash.com/photo-1593642533141-7d8a7d6d6f5a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__headerWrapper">
          <img
            src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"
          />
          <button className="text__button">Logout</button>
          <div className="app__headerButtons">
            <button className="primary__button">Login</button>
            <button className="text__button">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="timeline">
        {posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

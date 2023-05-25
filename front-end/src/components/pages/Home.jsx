import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <div className="left-top"></div>
        <div className="left-middle"></div>
        <div className="left-footer"></div>
      </div>
      <div className="home-middle">tin giữa</div>
      <div className="home-right">tin phải</div>
    </div>
  );
}

export default Home;

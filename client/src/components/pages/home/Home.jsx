import React from "react";
import "./Home.css";
import HomeLeft from "./home-left/HomeLeft";
import HomeRight from "./home-right/HomeRight";
import HomeMiddle from "./home-middle/HomeMiddle";
import MyNavbar from "../../layouts/navbar/MyNavbar";

function Home() {
  return (
    <>
      <MyNavbar />
      <div className="home-container">
        {/* Left */}
        <HomeLeft />
        {/* Left - End */}

        {/* Middle */}
        <HomeMiddle />
        {/* Middle - End */}

        {/* Right */}
        <HomeRight />
        {/* Right - End */}
      </div>
    </>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import HomeLeft from "./home-left/HomeLeft";
import HomeRight from "./home-right/HomeRight";

import StoryCarousel from "./home-middle/carousel/StoryCarousel";

function Home() {
  return (
    <div className="home-container">
      {/* Left */}
      <HomeLeft />
      {/* Left - End */}

      {/* Middle */}
      <div className="home-middle">
        <StoryCarousel />
        <div className="create-newfeed-container">
          <div className="create-newfeed-input-container">
            <div className="right-avatar">
              <img
                src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                alt=""
              />
            </div>
            <div className="create-newfeed-input">input</div>
          </div>
          <div className="create-newfeed-videos-images">
            <div className="create-newfeed-videos">
              <i class="fa-sharp fa-solid fa-video"></i> Video trực tiếp
            </div>
            <div className="create-newfeed-images">
              <i class="fa-sharp fa-solid fa-images"></i> Ảnh/video
            </div>
            <div className="create-newfeed-smile">
              <i class="fa-sharp fa-solid fa-face-laugh"></i> Cảm xúc/hoạt động
            </div>
          </div>
        </div>
      </div>

      {/* Middle - End */}

      {/* Right */}
      <HomeRight />
      {/* Right - End */}
    </div>
  );
}

export default Home;

import React from "react";
import Carousel from "react-bootstrap/Carousel";

function StoryCarousel() {
  return (
    <>
      <div className="story-big-container">
        <div className="news-reels-container">
          <div className="story-news-active">
            <i class="fa-sharp fa-solid fa-book-open"></i> Tin
          </div>
          <div className="story-reels">
            <i class="fa-sharp fa-solid fa-circle-play"></i> Reels
          </div>
        </div>
        <div className="Carousel-container">
          <Carousel>
            <Carousel.Item>
              <div className="story-container">
                {/* STORY BLOCK */}
                <div className="d-block w-25 add-story">
                  <img
                    className="img-avatar"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                    alt="First slide"
                  />
                  <i class="fa-solid fa-circle-plus"></i>
                  <div className="create-story">Tạo tin</div>
                </div>
                {/* STORY BLOCK END*/}

                {/* STORY BLOCK */}
                <div className="d-block w-25 story-img-container">
                  <img
                    className="img"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/349299248_275885074898216_2198376939325211895_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N0oNLYCYGzMAX_yG5e_&_nc_ht=scontent.fhan3-1.fna&oh=00_AfC57seRy5r_1o6D4-kvvDfH7EOXYevYHwqqhpDY0p9JGw&oe=647B464F"
                    alt="First slide"
                  />
                </div>
                <div className="story-avatar-active">
                  <img
                    className="story-avatar"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                    alt=""
                  />
                  <i class="fa-sharp fa-solid fa-circle"></i>
                </div>
                {/* STORY BLOCK END*/}

                {/* STORY BLOCK */}
                <div className="d-block w-25 story-img-container">
                  <img
                    className="img"
                    src="https://images2.alphacoders.com/127/1274305.png"
                    alt="First slide"
                  />
                </div>
                <div className="story-avatar-active">
                  <img
                    className="story-avatar"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                    alt=""
                  />
                  <i class="fa-sharp fa-solid fa-circle"></i>
                </div>
                {/* STORY BLOCK END*/}

                {/* STORY BLOCK */}
                <div className="d-block w-25 story-img-container">
                  <img
                    className="img"
                    src="https://i.pinimg.com/736x/7c/ae/bc/7caebc8f1c26cd1c053162a8fd0b75aa.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="story-avatar-active">
                  <img
                    className="story-avatar"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                    alt=""
                  />
                  <i class="fa-sharp fa-solid fa-circle"></i>
                </div>
                {/* STORY BLOCK END*/}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="story-container">
                {/* STORY BLOCK */}
                <div className="d-block w-25 story-img-container">
                  <img
                    className="img"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/349299248_275885074898216_2198376939325211895_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N0oNLYCYGzMAX_yG5e_&_nc_ht=scontent.fhan3-1.fna&oh=00_AfC57seRy5r_1o6D4-kvvDfH7EOXYevYHwqqhpDY0p9JGw&oe=647B464F"
                    alt="First slide"
                  />
                </div>
                <div className="story-avatar-active">
                  <img
                    className="story-avatar"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                    alt=""
                  />
                  <i class="fa-sharp fa-solid fa-circle"></i>
                </div>
                {/* STORY BLOCK END*/}

                {/* STORY BLOCK */}
                <div className="d-block w-25 story-img-container">
                  <img
                    className="img"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/349299248_275885074898216_2198376939325211895_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N0oNLYCYGzMAX_yG5e_&_nc_ht=scontent.fhan3-1.fna&oh=00_AfC57seRy5r_1o6D4-kvvDfH7EOXYevYHwqqhpDY0p9JGw&oe=647B464F"
                    alt="First slide"
                  />
                </div>
                <div className="story-avatar-active">
                  <img
                    className="story-avatar"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                    alt=""
                  />
                  <i class="fa-sharp fa-solid fa-circle"></i>
                </div>
                {/* STORY BLOCK END*/}
                {/* STORY BLOCK */}
                <div className="d-block w-25 story-img-container">
                  <img
                    className="img"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/349299248_275885074898216_2198376939325211895_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N0oNLYCYGzMAX_yG5e_&_nc_ht=scontent.fhan3-1.fna&oh=00_AfC57seRy5r_1o6D4-kvvDfH7EOXYevYHwqqhpDY0p9JGw&oe=647B464F"
                    alt="First slide"
                  />
                </div>
                <div className="story-avatar-active">
                  <img
                    className="story-avatar"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                    alt=""
                  />
                  <i class="fa-sharp fa-solid fa-circle"></i>
                </div>
                {/* STORY BLOCK END*/}
                {/* STORY BLOCK */}
                <div className="d-block w-25 story-img-container">
                  <img
                    className="img"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/349299248_275885074898216_2198376939325211895_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N0oNLYCYGzMAX_yG5e_&_nc_ht=scontent.fhan3-1.fna&oh=00_AfC57seRy5r_1o6D4-kvvDfH7EOXYevYHwqqhpDY0p9JGw&oe=647B464F"
                    alt="First slide"
                  />
                </div>
                <div className="story-avatar-active">
                  <img
                    className="story-avatar"
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                    alt=""
                  />
                  <i class="fa-sharp fa-solid fa-circle"></i>
                </div>
                {/* STORY BLOCK END*/}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default StoryCarousel;
import React from "react";
import { Link } from "react-router-dom";
import "./HomeLeft.css";

function HomeLeft() {
  return (
    <>
      <div className="home-left">
        <div className="left-top">
          <div className="left-top-user">
            <div className="left-top-avatar">
              <img
                src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                alt=""
              />
            </div>
            <div className="left-top-name">Anh Thân Ngọc</div>
          </div>
          {/* LEFT TOP MIDDLE BLOCK */}
          <Link className="nav-link active" aria-current="page">
            <div className="left-top-middle">
              <div className="left-top-icon">
                <i class="fa-solid fa-user-group"></i>
              </div>
              <div className="left-top-text">Bạn bè</div>
            </div>
          </Link>
          {/* LEFT TOP MIDDLE BLOCK END */}
          {/* LEFT TOP MIDDLE BLOCK */}
          <Link
            className="nav-link active"
            aria-current="page"
            to={"/marketplace/"}
          >
            <div className="left-top-middle">
              <div className="left-top-icon">
                <i class="fa-solid fa-store"></i>
              </div>
              <div className="left-top-text">Marketplace</div>
            </div>
          </Link>
          {/* LEFT TOP MIDDLE BLOCK END */}
          {/* LEFT TOP MIDDLE BLOCK */}
          <Link className="nav-link active" aria-current="page">
            <div className="left-top-middle">
              <div className="left-top-img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Frecently.png?alt=media&token=fe39cbd1-42e8-4f24-9c2b-25b7d4dba13f"
                  alt=""
                />
              </div>
              <div className="left-top-text2">Gần đây nhất</div>
            </div>
          </Link>
          {/* LEFT TOP MIDDLE BLOCK END */}
          {/* LEFT TOP MIDDLE BLOCK */}
          <Link
            className="nav-link active"
            aria-current="page"
            to={"/groups/feed/"}
          >
            <div className="left-top-middle">
              <div className="left-top-icon">
                <i class="fa-sharp fa-solid fa-users"></i>
              </div>
              <div className="left-top-text">Nhóm</div>
            </div>
          </Link>
          {/* LEFT TOP MIDDLE BLOCK END */}

          {/* LEFT TOP MIDDLE BLOCK */}
          <Link className="nav-link active" aria-current="page" to={"/watch/"}>
            <div className="left-top-middle">
              <div className="left-top-icon">
                <i class="fa-solid fa-tv"></i>
              </div>
              <div className="left-top-text">Watch</div>
            </div>
          </Link>
          {/* LEFT TOP MIDDLE BLOCK END */}

          {/* LEFT TOP MIDDLE BLOCK */}
          <div className="left-top-middle">
            <div className="left-top-show-more">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Fshow-more.png?alt=media&token=0bbcc1cc-fa63-4462-90de-c7fc455db736"
                alt=""
              />
            </div>
            <div className="left-top-text">Xem Thêm</div>
          </div>
          {/* LEFT TOP MIDDLE BLOCK END */}
        </div>
        <hr />
        <div className="left-middle">
          <div className="shortcut">
            <div className="shortcut-text">Lối tắt của bạn</div>
            <div className="shortcut-edit">Chỉnh sửa</div>
          </div>
          <div>
            {/* LEFT MIDDLE BLOCK */}
            <Link
              className="nav-link active"
              aria-current="page"
              to={
                "https://play.google.com/store/apps/details?id=com.miniclip.agar.io&hl=en_US&pli=1"
              }
            >
              <div className="left-top-middle">
                <div className="left-top-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Fagar.io.webp?alt=media&token=ced19680-9b9b-4a34-ae1f-b308cf8cb4b3"
                    alt=""
                  />
                </div>
                <div className="left-top-text2">Argar.io</div>
              </div>
            </Link>
            {/* LEFT MIDDLE BLOCK END */}

            {/* LEFT MIDDLE BLOCK */}
            <Link
              className="nav-link active"
              aria-current="page"
              to={"https://ptn.aisnogames.com/en-EN/home"}
            >
              <div className="left-top-middle">
                <div className="left-top-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Fpath-to-nowhere.png?alt=media&token=16bbc371-39bc-494e-bcdd-74b0d49b041d"
                    alt=""
                  />
                </div>
                <div className="left-top-text2">Path to Nowhere</div>
              </div>
            </Link>
            {/* LEFT MIDDLE BLOCK END */}

            {/* LEFT MIDDLE BLOCK */}
            <Link
              className="nav-link active"
              aria-current="page"
              to={
                "https://play.google.com/store/apps/details?id=com.sidheinteractive.sif.DR&hl=vi&gl=US"
              }
            >
              <div className="left-top-middle">
                <div className="left-top-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Finto-dead.jpg?alt=media&token=87b143bf-943b-4041-93cb-4929e66ee838"
                    alt=""
                  />
                </div>
                <div className="left-top-text2">Into the Dead</div>
              </div>
            </Link>
            {/* LEFT MIDDLE BLOCK END */}

            {/* LEFT MIDDLE BLOCK */}
            <Link
              className="nav-link active"
              aria-current="page"
              to={
                "https://play.google.com/store/apps/details?id=com.biglime.cookingmadness&hl=en_US"
              }
            >
              <div className="left-top-middle">
                <div className="left-top-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Fcooking-madness.png?alt=media&token=6bf452ef-3b39-4b1c-8218-25bdce423e15"
                    alt=""
                  />
                </div>
                <div className="left-top-text2">
                  Cooking Madness - A Chef's Game
                </div>
              </div>
            </Link>
            {/* LEFT MIDDLE BLOCK END */}

            {/* LEFT MIDDLE BLOCK */}
            <Link
              className="nav-link active"
              aria-current="page"
              to={"https://snake.io/"}
            >
              <div className="left-top-middle">
                <div className="left-top-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Fsnake-io.png?alt=media&token=2e849618-7e4e-4014-8d5d-33c21fd36720"
                    alt=""
                  />
                </div>
                <div className="left-top-text2">Snake.io</div>
              </div>
            </Link>
            {/* LEFT MIDDLE BLOCK END */}

            {/* LEFT MIDDLE BLOCK */}
            <div className="left-top-middle">
              <div className="left-top-show-more">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Fshow-more.png?alt=media&token=0bbcc1cc-fa63-4462-90de-c7fc455db736"
                  alt=""
                />
              </div>
              <div className="left-top-text">Xem Thêm</div>
            </div>
            {/* LEFT MIDDLE BLOCK END */}
          </div>
        </div>
        <div className="left-footer">
          <div>
            Quyền riêng tư · Điều khoản · Quảng cáo · Lựa chọn quảng cáo ·
            Cookie · Meta © 2023
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLeft;

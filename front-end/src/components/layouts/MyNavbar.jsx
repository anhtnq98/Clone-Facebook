import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <div className="nav-container">
      <Navbar className="bootstrap-container" bg="white" expand="lg">
        <Container>
          <div className="nav-left">
            <div>
              <img
                className="circle-logo"
                src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Flogo-removebg-preview.png?alt=media&token=62e92ba5-64d9-4d95-b9fa-624e1c49e368"
                alt="facebook-icon"
              />
            </div>
            <div className="search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="search-board">
              <div className="search-header">
                <div>
                  <i
                    id="search-back"
                    class="fa-sharp fa-solid fa-arrow-left"
                  ></i>
                </div>
                <input type="text" placeholder="Tìm kiếm trên Facebook" />
              </div>
              <div
                id="search-middle-container"
                className="search-middle-container"
              >
                <div className="search-middle">
                  <div className="search-recently">Tìm kiếm gần đây</div>
                  <div className="search-edit">Chỉnh sửa</div>
                </div>
                <div className="search-bottom">
                  {/* search block */}
                  <div className="search-block">
                    <div className="search-block-infor">
                      <div className="search-block-infor-avartar">
                        <img
                          src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                          alt=""
                        />
                      </div>
                      <div style={{ paddingLeft: "15px" }}>
                        <div style={{ fontSize: "18px" }}>Tên</div>
                        <div style={{ fontSize: "14px", color: "gray" }}>
                          Bạn bè
                        </div>
                      </div>
                    </div>
                    <div>
                      <i id="search-delete" class="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  {/* search block end */}
                  {/* search block */}
                  <div className="search-block">
                    <div className="search-block-infor">
                      <div className="search-block-infor-avartar">
                        <img
                          src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                          alt=""
                        />
                      </div>
                      <div style={{ paddingLeft: "15px" }}>
                        <div style={{ fontSize: "18px" }}>Tên</div>
                        <div style={{ fontSize: "14px", color: "gray" }}>
                          Bạn bè
                        </div>
                      </div>
                    </div>
                    <div>
                      <i id="search-delete" class="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  {/* search block end */}
                  {/* search block */}
                  <div className="search-block">
                    <div className="search-block-infor">
                      <div className="search-block-infor-avartar">
                        <img
                          src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                          alt=""
                        />
                      </div>
                      <div style={{ paddingLeft: "15px" }}>
                        <div style={{ fontSize: "18px" }}>Tên</div>
                        <div style={{ fontSize: "14px", color: "gray" }}>
                          Bạn bè
                        </div>
                      </div>
                    </div>
                    <div>
                      <i id="search-delete" class="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  {/* search block end */}
                  {/* search block */}
                  <div className="search-block">
                    <div className="search-block-infor">
                      <div className="search-block-infor-avartar">
                        <img
                          src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                          alt=""
                        />
                      </div>
                      <div style={{ paddingLeft: "15px" }}>
                        <div style={{ fontSize: "18px" }}>Tên</div>
                        <div style={{ fontSize: "14px", color: "gray" }}>
                          Bạn bè
                        </div>
                      </div>
                    </div>
                    <div>
                      <i id="search-delete" class="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  {/* search block end */}
                  {/* search block */}
                  <div className="search-block">
                    <div className="search-block-infor">
                      <div className="search-block-infor-avartar">
                        <img
                          src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                          alt=""
                        />
                      </div>
                      <div style={{ paddingLeft: "15px" }}>
                        <div style={{ fontSize: "18px" }}>Tên</div>
                        <div style={{ fontSize: "14px", color: "gray" }}>
                          Bạn bè
                        </div>
                      </div>
                    </div>
                    <div>
                      <i id="search-delete" class="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  {/* search block end */}
                  {/* search block */}
                  <div className="search-block">
                    <div className="search-block-infor">
                      <div className="search-block-infor-avartar">
                        <img
                          src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                          alt=""
                        />
                      </div>
                      <div style={{ paddingLeft: "15px" }}>
                        <div style={{ fontSize: "18px" }}>Tên</div>
                        <div style={{ fontSize: "14px", color: "gray" }}>
                          Bạn bè
                        </div>
                      </div>
                    </div>
                    <div>
                      <i id="search-delete" class="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  {/* search block end */}
                  {/* search block */}
                  <div className="search-block">
                    <div className="search-block-infor">
                      <div className="search-block-infor-avartar">
                        <img
                          src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                          alt=""
                        />
                      </div>
                      <div style={{ paddingLeft: "15px" }}>
                        <div style={{ fontSize: "18px" }}>Tên</div>
                        <div style={{ fontSize: "14px", color: "gray" }}>
                          Bạn bè
                        </div>
                      </div>
                    </div>
                    <div>
                      <i id="search-delete" class="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  {/* search block end */}
                  {/* search block */}
                  <div className="search-block">
                    <div className="search-block-infor">
                      <div className="search-block-infor-avartar">
                        <img
                          src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                          alt=""
                        />
                      </div>
                      <div style={{ paddingLeft: "15px" }}>
                        <div style={{ fontSize: "18px" }}>Tên</div>
                        <div style={{ fontSize: "14px", color: "gray" }}>
                          Bạn bè
                        </div>
                      </div>
                    </div>
                    <div>
                      <i id="search-delete" class="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  {/* search block end */}
                </div>
              </div>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="nav-middle">
              <div>
                <i class="fa-solid fa-solid fa-house active"></i>
              </div>
              <div>
                <i class="fa-solid fa-solid fa-tv"></i>
              </div>
              <div>
                <i class="fa-solid fa-solid fa-store"></i>
              </div>
              <div>
                <i class="fa-solid fa-user-group"></i>
              </div>
              <div>
                <i class="fa-solid fa-gamepad"></i>
              </div>
            </div>
          </Navbar.Collapse>
          <div className="nav-right">
            <div className="right-icon">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Fmenu.png?alt=media&token=b120cd9a-ddf1-45bd-9514-693a6d58e679"
                alt=""
              />
            </div>
            <div className="right-icon">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Fmessege.png?alt=media&token=2de73791-e0f1-4e68-81dd-5a5fbf08f172"
                alt=""
              />
            </div>
            <div className="right-icon">
              <div className="right-icon-nofication">5</div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Fbell-removebg-preview.png?alt=media&token=a54b36e1-f18e-4199-91ca-3fc9cd741df2"
                alt=""
              />
            </div>

            <div className="right-avatar">
              <img
                src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                alt=""
              />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;

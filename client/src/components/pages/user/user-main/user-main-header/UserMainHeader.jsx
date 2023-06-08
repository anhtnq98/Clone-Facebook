import React from "react";
import "./UserMainHeader.css";

function UserMainHeader() {
  return (
    <>
      <div className="user-main-header">
        <div
          style={{
            backgroundImage: `url("https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/289019810_3144543382523232_7376749079844256890_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=bsDrm08dLT0AX9MkBi4&_nc_ht=scontent.fhan3-5.fna&oh=00_AfAzAHz1M110D2b3AmNyM05ftt9qmOxC1cbP7YwnQqmCPA&oe=64845A83")`,
          }}
          className="bg-avatar"
        >
          <div className="bg-avatar-optional">
            <i class="fas fa-smile"></i> <span> Tạo với avatar</span>
          </div>
          <div style={{ marginBottom: "15px" }} className="bg-avatar-optional">
            <i class="fas fa-camera"></i> <span> Chỉnh sửa ảnh bìa</span>
          </div>
        </div>
        <div className="user-main-avatar-info-container">
          <div className="user-main-avatar-info">
            <div className="user-main-avatar-info-left">
              <div className="user-main-avatar">
                <img
                  src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                  alt=""
                />
              </div>
              <div className="user-main-info">
                <div className="user-main-info-name">Anh Thân Ngọc</div>
                <div className="user-main-info-nickname">(Chibi)</div>
                <div className="user-main-info-friend-quantity">
                  2,3K bạn bè
                </div>
                <div className="user-main-info-friend">
                  <div className="user-main-info-friend-first">
                    <img
                      src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                      alt=""
                    />
                  </div>
                  <div className="user-main-info-friend-avatar">
                    <img
                      src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                      alt=""
                    />
                  </div>
                  <div className="user-main-info-friend-avatar">
                    <img
                      src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                      alt=""
                    />
                  </div>
                  <div className="user-main-info-friend-avatar">
                    <img
                      src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                      alt=""
                    />
                  </div>
                  <div className="user-main-info-friend-avatar">
                    <img
                      src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                      alt=""
                    />
                  </div>
                  <div className="user-main-info-friend-avatar">
                    <img
                      src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                      alt=""
                    />
                  </div>
                  <div className="user-main-info-friend-avatar">
                    <img
                      src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                      alt=""
                    />
                  </div>
                  <div className="user-main-info-friend-last">
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-3/64/__menu_more-27-512.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="user-main-info-camera">
                  <i class="fas fa-camera-retro"></i>
                </div>
              </div>
            </div>
            <div className="user-main-avatar-info-right">
              <div className="user-main-add-news">
                <i class="fas fa-plus"></i> Thêm vào tin
              </div>
              <div className="user-main-edit">
                <i class="fas fa-pen"></i> Chỉnh sửa trang cá nhân
              </div>
            </div>
          </div>
          <hr />
          <div>ààầ</div>
        </div>
      </div>
    </>
  );
}

export default UserMainHeader;

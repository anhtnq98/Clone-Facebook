import "./NavUser.css";
import React from "react";
import { Link } from "react-router-dom";

function NavUser(props) {
  return (
    <>
      <div className={props.navUserActiveStyle}>
        {/* NAV USER AVATAR */}
        <div className="nav-user-avatar">
          <div className="nav-user-avatar-small">
            <div className="nav-user-avatar-small-img">
              <img
                src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                alt=""
              />
            </div>
            <div className="nav-user-name">Anh Thân Ngọc</div>
          </div>
          <hr className="nav-user-hr" />
          <div className="nav-user-all-pages-container">
            <div className="nav-user-all-pages">Xem tất cả trang cá nhân</div>
          </div>
        </div>
        {/* NAV USER END */}
        {/* NAV USER OTHER */}
        <div className="nav-user-other">
          <div className="nav-user-settings">
            <i className="fas fa-cog"></i>
            <div className="nav-user-settings-text">Cài đặt</div>
          </div>
          <div className="nav-user-settings">
            <i class="fas fa-question-circle"></i>
            <div className="nav-user-settings-text">Trợ giúp</div>
          </div>
          <div className="nav-user-settings">
            <i style={{ padding: "10px 12.5px" }} class="fa-solid fa-moon"></i>
            <div className="nav-user-settings-text">Chế độ tối</div>
          </div>
          <Link className="nav-link active" aria-current="page" to={"/Login"}>
            <div className="nav-user-settings">
              <i class="fa-solid fa-right-from-bracket"></i>
              <div className="nav-user-settings-text">Đăng xuất</div>
            </div>
          </Link>
          <div className="nav-user-footer">
            Quyền riêng tư · Điều khoản · Quảng cáo · Lựa chọn quảng cáo ·
            Cookie · · Meta © 2023
          </div>
        </div>
        {/* NAV USER OTHER END */}
      </div>
    </>
  );
}

export default NavUser;

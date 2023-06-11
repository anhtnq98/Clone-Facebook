import "./NavUser.css";
import React from "react";
import { Link } from "react-router-dom";

function NavUser(props) {
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  const handleLogOut = () => {
    JSON.parse(localStorage.getItem("loginFlag"));
    localStorage.removeItem("loginFlag");
    window.location.href = "/";
  };

  return (
    <>
      <div className={props.navUserActiveStyle}>
        {/* NAV USER AVATAR */}
        <div className="nav-user-avatar">
          <Link
            className="nav-link active"
            aria-current="page"
            to={`/${saveFlag.userId}/`}
          >
            <div className="nav-user-avatar-small">
              <div className="nav-user-avatar-small-img">
                <img src={props.user.avatarDefault} alt="" />
              </div>
              <div className="nav-user-name">
                {props.user.firstName} {props.user.surName}
              </div>
            </div>
          </Link>
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

          <div className="nav-user-settings">
            <i class="fa-solid fa-right-from-bracket"></i>
            <div onClick={handleLogOut} className="nav-user-settings-text">
              Đăng xuất
            </div>
          </div>

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

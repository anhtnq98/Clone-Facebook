import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Search from "./search/Search";
import NavUser from "./nav-user/NavUser";

function MyNavbar() {
  // Trạng thái active của router
  const navLinkClassName = ({ isActive }) =>
    isActive ? "active" : "non-active";

  // Ẩn hiện Nav-user
  const [navUserActive, setNavUserActive] = useState(false);
  const [navUserActiveStyle, setNavUserActiveStyle] =
    useState("nav-user-container");

  const handleClick = () => {
    if (navUserActive === false) {
      setNavUserActive(true);
      setNavUserActiveStyle("nav-user-container-active");
      return;
    } else {
      setNavUserActive(false);
      setNavUserActiveStyle("nav-user-container");
      return;
    }
  };

  return (
    <div className="nav-container">
      <Navbar className="bootstrap-container" bg="white" expand="lg">
        <div className="nav-left">
          <Link to={"/"}>
            <div>
              <img
                className="circle-logo"
                src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Flogo-removebg-preview.png?alt=media&token=62e92ba5-64d9-4d95-b9fa-624e1c49e368"
                alt="facebook-icon"
              />
            </div>
          </Link>

          {/* SEARCH */}
          <Search />
          {/* SEARCH END*/}

          <div className="bars">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        <div className="nav-middle">
          <NavLink className={navLinkClassName} to={"/"}>
            <i className={`fa-solid fa-solid fa-house`}></i>
          </NavLink>
          <NavLink className={navLinkClassName} to={"/watch/"}>
            <i className={`fa-solid fa-solid fa-tv`}></i>
          </NavLink>
          <NavLink className={navLinkClassName} to={"/marketplace/"}>
            <i className="fa-solid fa-solid fa-store"></i>
          </NavLink>
          <NavLink className={navLinkClassName} to={"/groups/feed/"}>
            <i className="fa-solid fa-users"></i>
          </NavLink>
          <NavLink className={navLinkClassName} to={"/gaming/play/"}>
            <i className="fa-solid fa-gamepad"></i>
          </NavLink>
        </div>

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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Fbell-removebg-preview.png?alt=media&token=a54b36e1-f18e-4199-91ca-3fc9cd741df2"
              alt=""
            />
          </div>
          <div className="right-icon-nofication">5</div>
          {/* RIGHT AVATAR */}
          <div onClick={handleClick} className="right-avatar">
            <img
              src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
              alt=""
            />
          </div>
          {/* RIGHT AVATAR END*/}
        </div>
        {/* NAV USER */}
        <NavUser navUserActiveStyle={navUserActiveStyle} />
        {/* NAV USER END*/}
      </Navbar>
    </div>
  );
}

export default MyNavbar;

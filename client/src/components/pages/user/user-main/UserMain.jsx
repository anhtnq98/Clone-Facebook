import React from "react";
import "./UserMain.css";
import MyNavbar from "../../../layouts/navbar/MyNavbar";
import UserMainHeader from "./user-main-header/UserMainHeader";
import { Route, Routes } from "react-router-dom";
import UserMainHome from "./user-main-bottom/user-main-home/UserMainHome";
import UserMainAbout from "./user-main-bottom/user-main-about/UserMainAbout";
import UserMainFriends from "./user-main-bottom/user-main-friends/UserMainFriends";
import UserMainPhotos from "./user-main-bottom/user-main-photos/UserMainPhotos";
import UserMainVideos from "./user-main-bottom/user-main-videos/UserMainVideos";

function UserMain() {
  // const loginFlag = JSON.parse(localStorage.getItem("loginFlag"));
  return (
    <>
      <MyNavbar />
      <div className="user-main-container">
        {/* USER MAIN HEADER */}
        <UserMainHeader />
        {/* USER MAIN HEADER */}
        <div className="user-main-bottom">
          <Routes>
            <Route path="/user-main-page/" element={<UserMainHome />} />
            <Route path="/user-main-page/about" element={<UserMainAbout />} />
            <Route
              path="/user-main-page/friends"
              element={<UserMainFriends />}
            />
            <Route path="/user-main-page/photos" element={<UserMainPhotos />} />
            <Route path="/user-main-page/videos" element={<UserMainVideos />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default UserMain;

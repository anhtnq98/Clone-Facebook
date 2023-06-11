import React, { useEffect, useState } from "react";
import "./UserMain.css";
import MyNavbar from "../../../layouts/navbar/MyNavbar";
import UserMainHeader from "./user-main-header/UserMainHeader";
import { Outlet } from "react-router-dom";
import axios from "axios";

function UserMain() {
  // Lấy dữ liệu từ users
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  const id = saveFlag.userId;
  const [user, setUser] = useState([]);
  const loadData = async () => {
    const result = await axios.get(`http://localhost:5000/api/v1/users/${id}`);
    setUser(result.data.data[0]);
  };
  useEffect(() => {
    loadData();
  });

  // Lấy dữ liệu bạn bè
  const [friends, setFfriends] = useState([]);
  const loadFriends = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/users/friends/${id}`
    );
    setFfriends(result.data.data);
  };

  useEffect(() => {
    loadFriends();
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="user-main-container">
        {/* USER MAIN HEADER */}
        <UserMainHeader user={user} friends={friends} />
        {/* USER MAIN HEADER */}
        <div className="user-main-bottom">
          <Outlet context={[user]}></Outlet>
        </div>
      </div>
    </>
  );
}

export default UserMain;

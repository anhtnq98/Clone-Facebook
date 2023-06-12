import React, { useEffect, useState } from "react";
import "../user-main/UserMain.css";
import axios from "axios";
import { Outlet, useParams } from "react-router-dom";
import MyNavbar from "../../../layouts/navbar/MyNavbar";
import OtherMainHeader from "./other-main-header/OtherMainHeader";

function OtherMain() {
  // Lấy dữ liệu từ users
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const loadData = async () => {
    const result = await axios.get(`http://localhost:5000/api/v1/users/${id}`);
    setUser(result.data.data[0]);
  };
  useEffect(() => {
    loadData();
  }, []);

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
        <OtherMainHeader user={user} friends={friends} />
        {/* USER MAIN HEADER */}
        <div className="user-main-bottom">
          <Outlet context={[user]}></Outlet>
        </div>
      </div>
    </>
  );
}

export default OtherMain;

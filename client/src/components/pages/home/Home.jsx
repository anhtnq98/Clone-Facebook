import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeLeft from "./home-left/HomeLeft";
import HomeRight from "./home-right/HomeRight";
import HomeMiddle from "./home-middle/HomeMiddle";
import MyNavbar from "../../layouts/navbar/MyNavbar";
import axios from "axios";

function Home() {
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

  return (
    <>
      <MyNavbar/>
      <div className="home-container">
        {/* Left */}
        <HomeLeft user={user} />
        {/* Left - End */}

        {/* Middle */}
        <HomeMiddle user={user} />
        {/* Middle - End */}

        {/* Right */}
        <HomeRight user={user} />
        {/* Right - End */}
      </div>
    </>
  );
}

export default Home;

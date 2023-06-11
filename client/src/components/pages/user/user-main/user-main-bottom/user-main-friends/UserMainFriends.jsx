import React, { useEffect, useState } from "react";
import "./UserMainFriends.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

function UserMainFriends() {
  // Lấy dữ liệu bạn bè
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  const id = saveFlag.userId;
  const [friends, setFfriends] = useState([]);
  const loadFriends = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/users/friends/${id}`
    );
    setFfriends(result.data.data);
  };

  useEffect(() => {
    loadFriends();
  });

  return (
    <>
      <div className="user-main-friend-container">
        <div className="user-main-friend">
          <div className="user-main-friend-title-search">
            <div className="user-main-home-left-block-title">Bạn bè</div>
            <div className="user-main-friend-right">
              <div className="user-main-friend-search">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Tìm kiếm" />
              </div>
              <div className="user-main-friend-request">Lời mời kết bạn</div>
            </div>
          </div>
          <div className="user-main-friend-list">
            {/* FRIEND LIST BLOCK */}
            {friends !== null ? (
              friends?.map((friend, friendIndex) => (
                <div key={friendIndex} className="user-main-friend-list-block">
                  <div className="user-main-friend-list-block-left">
                    <div className="friend-list-block-left-img">
                      <img src={friend.avatarDefault} alt="" />
                    </div>
                    <div className="friend-list-block-left-text">
                      <div className="friend-list-block-left-text-name">
                        {friend.firstName} {friend.surName}
                      </div>
                      <div className="friend-list-block-left-text-same">
                        1 bạn chung
                      </div>
                    </div>
                  </div>
                  <div className="friend-list-block-left-dot">
                    <span>
                      <i class="fas fa-ellipsis-h"></i>
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div>Danh sách bạn bè đang trống</div>
            )}

            {/* FRIEND LIST BLOCK END*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMainFriends;

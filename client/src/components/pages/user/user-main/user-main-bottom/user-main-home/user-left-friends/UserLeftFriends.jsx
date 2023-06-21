import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserLeftFriends() {
  //<<<<<<<<<<<<<<<<<< ==================================== MY SQL FRIENDS =================================================== >>>>>>>>>>>>>>//
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
  }, []);
  const myFriend = friends.filter((e) => e.friendStatus === 2);
  return (
    <>
      <div className="user-main-home-left-friends">
        <div className="user-main-home-left-block">
          <div className="user-main-home-left-block-head">
            <div className="user-main-home-left-block-title">Bạn bè</div>
            <a
              className="a"
              href={`http://localhost:3000/${saveFlag.userId}/friends`}
            >
              <div className="user-main-home-left-block-more">
                Xem tất cả bạn bè
              </div>
            </a>
          </div>
          <div className="user-main-home-friend-quantity">
            {myFriend.length} người bạn
          </div>

          <div className="user-main-home-friends">
            {/* BLOCK FRIEND */}
            {myFriend
              ?.slice(myFriend.length - 9, myFriend.length)
              .map((friend, i) => (
                <>
                  <div className="user-main-home-friend-block">
                    <div className="user-main-home-friend">
                      <img src={friend.avatarDefault} alt="" />
                    </div>
                    <div className="user-main-home-friend-name">
                      {friend.firstName} {friend.surName}{" "}
                    </div>
                  </div>
                </>
              ))}

            {/* BLOCK FRIEND END*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLeftFriends;

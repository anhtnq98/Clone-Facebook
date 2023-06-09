import React, { useEffect, useState } from "react";
import "../../../user-main/user-main-bottom/user-main-friends/UserMainFriends.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function OtherMainFriends() {
  //<<<<<<<<<<<<<<<<<< ==================================== MY SQL FRIENDS =================================================== >>>>>>>>>>>>>>//
  // Lấy dữ liệu bạn bè
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  const { id } = useParams();
  const [friends, setfriends] = useState([]);
  const [myFriends, setMyFriends] = useState([]);
  const loadFriends = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/users/friends/${id}`
    );
    setfriends(result.data.data);
  };

  const loadMyFriends = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/users//check-same-friends/${saveFlag.userId}`
    );
    setMyFriends(result.data.data);
  };

  useEffect(() => {
    loadFriends();
  }, []);

  useEffect(() => {
    loadMyFriends();
  }, []);

  //<<<<<<<<<<<<<<<<<< ================================= MY SQL FRIENDS END=================================================== >>>>>>>>>>>>>>//

  const newfriends = friends.filter((e, i) => e.friendTwo !== saveFlag.userId);
  const checkfriends = friends.filter(
    (e, i) => e.friendTwo !== myFriends[i]?.friendTwo
  );
  let sameFriend = checkfriends.length;

  const handleAddFriend = async (friendTwo) => {
    const newFriendOne = {
      friendOne: saveFlag.userId,
      friendTwo: friendTwo,
      friendStatus: 1,
      followStatus: 0,
      relationship: 0,
    };

    const newFriendTwo = {
      friendOne: friendTwo,
      friendTwo: saveFlag.userId,
      friendStatus: 0,
      followStatus: 0,
      relationship: 0,
    };

    await axios.post(
      "http://localhost:5000/api/v1/users/add-friend",
      newFriendOne
    );
    await axios.post(
      "http://localhost:5000/api/v1/users/add-friend",
      newFriendTwo
    );
    loadFriends();
  };

  return (
    <>
      <div className="user-main-friend-container">
        <div className="user-main-friend">
          <div className="user-main-friend-title-search">
            <div className="user-main-home-left-block-title">Bạn bè</div>
            <div className="user-main-friend-right">
              <div className="user-main-friend-search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Tìm kiếm" />
              </div>
              <div className="user-main-friend-request">
                Bạn chung ({sameFriend})
              </div>
            </div>
          </div>
          <div className="user-main-friend-list">
            {/* FRIEND LIST BLOCK */}
            {friends !== null ? (
              newfriends?.map((friend, friendIndex) => (
                <>
                  <div
                    key={friendIndex}
                    className="user-main-friend-list-block"
                  >
                    <Link
                      to={`/${friend.friendTwo}`}
                      className="user-main-friend-list-block-left"
                    >
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
                    </Link>
                    {myFriends.filter(
                      (e) => e.friendTwo === friend.friendTwo
                    )[0] === undefined ? (
                      <>
                        <div
                          onClick={(e) => handleAddFriend(friend.friendTwo)}
                          className="user-main-add-news"
                        >
                          Thêm bạn bè
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="friend-list-block-left-dot">
                          <span>
                            <i className="fas fa-ellipsis-h"></i>
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ))
            ) : (
              <></>
            )}

            {/* FRIEND LIST BLOCK END*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherMainFriends;

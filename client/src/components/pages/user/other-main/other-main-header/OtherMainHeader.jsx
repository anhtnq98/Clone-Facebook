import React, { useEffect, useState } from "react";
import "../../user-main/user-main-header/UserMainHeader.css";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

function OtherMainHeader() {
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  // Lấy dữ liệu từ users
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const loadData = async () => {
    const result = await axios.get(`http://localhost:5000/api/v1/users/${id}`);
    setUser(result.data.data[0]);
  };

  useEffect(() => {
    loadData();
  }, [id]);

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
  }, [id]);

  const trueFriend = friends.filter(
    (e, i) => e.friendTwo !== saveFlag.userId && e.friendStatus === 2
  );

  const trueFrienda = friends.filter(
    (e, i) => e.friendTwo === saveFlag.userId && e.friendStatus === 2
  )[0];

  const requestFriend = friends.filter(
    (e, i) => e.friendTwo === saveFlag.userId && e.friendStatus === 1
  )[0];
  const pendingFriend = friends.filter(
    (e, i) => e.friendTwo === saveFlag.userId && e.friendStatus === 0
  )[0];

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
    loadData();
  };

  const handleCancelAddFriend = async (friendTwo) => {
    console.log(friendTwo);
    const valueOne = {
      friendOne: saveFlag.userId,
      friendTwo: friendTwo,
    };

    const valueTwo = {
      friendOne: friendTwo,
      friendTwo: saveFlag.userId,
    };

    await axios.put(
      `http://localhost:5000/api/v1/users/add-friend-cancel/`,
      valueOne
    );
    await axios.put(
      `http://localhost:5000/api/v1/users/add-friend-cancel/`,
      valueTwo
    );
    loadFriends();
    loadData();
  };

  const handleConfirm = async (friendTwo) => {
    const valueOne = {
      friendOne: saveFlag.userId,
      friendTwo: friendTwo,
    };

    const valueTwo = {
      friendOne: friendTwo,
      friendTwo: saveFlag.userId,
    };

    await axios.put(
      `http://localhost:5000/api/v1/users/add-friend-confirm/`,
      valueOne
    );
    await axios.put(
      `http://localhost:5000/api/v1/users/add-friend-confirm/`,
      valueTwo
    );
    window.location.reload();
  };

  const navLinkClassName = ({ isActive }) =>
    isActive ? "user-main-nav-active" : "user-main-nav";

  return (
    <>
      <div className="user-main-header">
        <div
          style={{
            backgroundImage: `url(${user.backgroundDefault})`,
          }}
          className="bg-avatar"
        ></div>
        <div className="user-main-avatar-info-container">
          <div className="user-main-avatar-info">
            <div className="user-main-avatar-info-left">
              <div className="friend-main-avatar">
                <img src={user.avatarDefault} alt="" />
              </div>
              <div className="friend-main-info">
                <div className="user-main-info-name">
                  {user.firstName} {user.surName}
                </div>
                {user.nickName !== null ? (
                  <>
                    <div className="user-main-info-nickname">
                      ({user.nickName})
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {trueFriend !== null ? (
                  <>
                    <div className="user-main-info-friend-quantity">
                      {trueFriend.length} bạn bè{" "}
                      <i className="fas fa-circle"></i> {trueFriend.length - 1}{" "}
                      bạn chung
                    </div>
                  </>
                ) : (
                  <>
                    <div className="user-main-info-friend-quantity">
                      0 bạn bè <i className="fas fa-circle"></i>{" "}
                      {trueFriend.length} bạn chung
                    </div>
                  </>
                )}

                <div className="user-main-info-friend">
                  {trueFriend.length === 1 ? (
                    <>
                      <div className="user-main-info-friend-first">
                        <img src={trueFriend[0]?.avatarDefault} alt="" />
                      </div>
                    </>
                  ) : trueFriend.length > 1 ? (
                    trueFriend?.slice(0, 7).map((friend, friendIndex) => (
                      <div
                        key={friendIndex}
                        className="user-main-info-friend-avatar"
                      >
                        <img src={friend.avatarDefault} alt="" />
                      </div>
                    ))
                  ) : trueFriend.length >= 8 ? (
                    <>
                      <div className="user-main-info-friend-last">
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-3/64/__menu_more-27-512.png"
                          alt=""
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            {requestFriend ? (
              <>
                <div className="user-main-avatar-info-right">
                  <div
                    onClick={(e) => handleConfirm(user.userId)}
                    className="user-main-add-news"
                  >
                    Chấp nhận lời mời
                  </div>
                  <div
                    onClick={(e) => handleCancelAddFriend(user.userId)}
                    className="user-main-edit"
                  >
                    Xóa lời mời
                  </div>
                </div>
              </>
            ) : pendingFriend ? (
              <>
                <div className="user-main-avatar-info-right">
                  <div
                    onClick={(e) => handleCancelAddFriend(user.userId)}
                    className="user-main-add-news"
                  >
                    <i className="fas fa-user-times"></i> Hủy lời mời
                  </div>
                  <div className="user-main-edit">
                    <i className="fa-solid fa-message"></i> Nhắn tin
                  </div>
                </div>
              </>
            ) : trueFrienda ? (
              <>
                <div className="user-main-avatar-info-right">
                  <div className="user-main-edit">
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-check"></i> Bạn bè
                  </div>
                  <div className="user-main-add-news">
                    <i className="fa-solid fa-message"></i> Nhắn tin
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={(e) => handleAddFriend(user.userId)}
                  className="user-main-avatar-info-right"
                >
                  <div className="user-main-add-news">
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-plus"></i> Thêm bạn bè
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="user-main-nav-container">
            <NavLink className={navLinkClassName} to={`/${user.userId}/`}>
              Bài viết
            </NavLink>
            <NavLink className={navLinkClassName} to={`/${user.userId}/about`}>
              Giới thiệu
            </NavLink>
            <NavLink
              className={navLinkClassName}
              to={`/${user.userId}/friends`}
            >
              Bạn bè
            </NavLink>
            <NavLink className={navLinkClassName} to={`/${user.userId}/photos`}>
              Ảnh
            </NavLink>
            <NavLink className={navLinkClassName} to={`/${user.userId}/videos`}>
              Video
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherMainHeader;

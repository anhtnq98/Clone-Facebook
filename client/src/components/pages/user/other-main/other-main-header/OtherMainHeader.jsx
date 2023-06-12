import React, { useEffect, useState } from "react";
import "../../user-main/user-main-header/UserMainHeader.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

function OtherMainHeader(userProps) {
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  const user = userProps.user;
  const friends = userProps.friends;
  const friendIndex = friends.findIndex((e) => e.friendTwo === saveFlag.userId);
  const [myFriends, setMyFriends] = useState([]);
  const loadMyFriends = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/users//check-same-friends/${saveFlag.userId}`
    );
    setMyFriends(result.data.data);
  };

  useEffect(() => {
    loadMyFriends();
  }, []);

  const checkfriends = friends.filter(
    (e, i) => e.friendTwo !== myFriends[i]?.friendTwo
  );
  let sameFriend = checkfriends.length;

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

                {friends !== null ? (
                  <>
                    <div className="user-main-info-friend-quantity">
                      {friends.length} bạn bè <i class="fas fa-circle"></i>{" "}
                      {sameFriend} bạn chung
                    </div>
                  </>
                ) : (
                  <>
                    <div className="user-main-info-friend-quantity">
                      0 bạn bè
                    </div>
                  </>
                )}

                <div className="user-main-info-friend">
                  {friends.length === 1 ? (
                    <>
                      <div className="user-main-info-friend-first">
                        <img src={friends[0]?.avatarDefault} alt="" />
                      </div>
                    </>
                  ) : friends.length > 1 ? (
                    friends?.slice(0, 7).map((friend, friendIndex) => (
                      <div
                        key={friendIndex}
                        className="user-main-info-friend-avatar"
                      >
                        <img src={friend.avatarDefault} alt="" />
                      </div>
                    ))
                  ) : friends.length >= 8 ? (
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

            {friends[friendIndex]?.friendTwo !== saveFlag.userId ? (
              <>
                <div className="user-main-avatar-info-right">
                  <div className="user-main-add-news">
                    <i class="fa-solid fa-user"></i>
                    <i class="fa-solid fa-plus"></i> Thêm bạn bè
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="user-main-avatar-info-right">
                  <div className="user-main-edit">
                    <i class="fa-solid fa-user"></i>
                    <i class="fa-solid fa-check"></i> Bạn bè
                  </div>
                  <div className="user-main-add-news">
                    <i class="fa-solid fa-message"></i> Nhắn tin
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

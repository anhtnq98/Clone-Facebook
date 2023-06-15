import React, { useEffect, useState } from "react";
import "./UserMainFriends.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function UserMainFriends() {
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

  // lấy tất cả người dùng
  const [users, setUsers] = useState([]);
  const loadAllUser = async () => {
    const result = await axios.get(`http://localhost:5000/api/v1/users`);
    setUsers(result.data.data);
  };

  useEffect(() => {
    loadAllUser();
  }, []);

  //<<<<<<<<<<<<<<<<<< ================================= MY SQL FRIENDS END=================================================== >>>>>>>>>>>>>>//

  // List kết bạn trong đó không có bạn bè và chính chủ
  const listUser = users.filter((e) => e.userId !== saveFlag.userId);
  const rejectFriend = friends.filter((e, i) => e.friendStatus === 3);
  const trueFriend = friends.filter((e, i) => e.friendStatus === 2);
  const requestFriend = friends.filter((e, i) => e.friendStatus === 1);
  const pendingFriend = friends.filter((e, i) => e.friendStatus === 0);

  //<<<<<<<<<<<<<<<<<< ========================================== MODAL =================================================== >>>>>>>>>>>>>>//
  // Ẩn hiện kết bạn
  const [showAddFriend, setShowAddFriend] = useState(false);
  const handleCloseAddFriend = () => setShowAddFriend(false);
  const handleShowAddFriend = () => setShowAddFriend(true);

  // Ẩn hiện tìm bạn bè
  const [showFindFriend, setShowFindFriend] = useState(false);
  const handleCloseFindFriend = () => setShowFindFriend(false);
  const handleShowFindFriend = () => setShowFindFriend(true);

  //<<<<<<<<<<<<<<<<<< ========================================== MODAL END =================================================== >>>>>>>>>>>>>>//

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
    loadAllUser();
  };

  const handleDisappear = async (friendTwo) => {
    const newFriendOne = {
      friendOne: saveFlag.userId,
      friendTwo: friendTwo,
      friendStatus: 3,
      followStatus: 0,
      relationship: 0,
    };

    const newFriendTwo = {
      friendOne: friendTwo,
      friendTwo: saveFlag.userId,
      friendStatus: 3,
      followStatus: 0,
      relationship: 0,
    };

    await axios.post(
      "http://localhost:5000/api/v1/users/add-friend-disappear",
      newFriendOne
    );
    await axios.post(
      "http://localhost:5000/api/v1/users/add-friend-disappear",
      newFriendTwo
    );
    loadFriends();
    loadAllUser();
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
    loadAllUser();
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
              <div
                onClick={handleShowAddFriend}
                className="user-main-friend-request"
              >
                Lời mời kết bạn
              </div>
              <div
                onClick={handleShowFindFriend}
                className="user-main-friend-request"
              >
                Tìm bạn mới
              </div>
            </div>
          </div>
          <div className="user-main-friend-list">
            {/* FRIEND LIST BLOCK */}
            {trueFriend[0] !== null ? (
              trueFriend?.map((friend, friendIndex) => (
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
                    <div className="friend-list-block-left-dot">
                      <span>
                        <i className="fas fa-ellipsis-h"></i>
                      </span>
                    </div>
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

      {/* MODAL ADD FRIEND ===============================================================>>>>>>>>>>>>>>>>>> */}
      <Modal size="lg" show={showAddFriend} onHide={handleCloseAddFriend}>
        <Modal.Header closeButton>
          <Modal.Title>Lời mời kết bạn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-container">
            {pendingFriend?.map((friend, friendIndex) => (
              <>
                <div key={friendIndex} className="card">
                  <Card style={{ width: "225px" }}>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={`/${friend.friendTwo}/`}
                    >
                      <div className="card-img-container">
                        <Card.Img
                          variant="top"
                          height={"215px"}
                          src={friend.avatarDefault}
                        />
                      </div>
                    </Link>
                    <Card.Body>
                      <Card.Title>
                        {friend.firstName} {friend.surName}
                      </Card.Title>
                      <Card.Text>1 bạn chung</Card.Text>
                      <div className="card-button-container">
                        <Button
                          onClick={() => handleConfirm(friend.friendTwo)}
                          variant="primary"
                        >
                          <div>Xác nhận</div>
                        </Button>
                        <Button
                          onClick={() =>
                            handleCancelAddFriend(friend.friendTwo)
                          }
                          variant="secondary"
                        >
                          <div>Xóa</div>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </>
            ))}
          </div>
        </Modal.Body>
      </Modal>
      {/* MODAL ADD FRIEND END*/}

      {/* MODAL FIND FRIEND ===============================================================>>>>>>>>>>>>>>>>>>  */}
      <Modal size="lg" show={showFindFriend} onHide={handleCloseFindFriend}>
        <Modal.Header closeButton>
          <Modal.Title>Tìm bạn bè (Gợi ý)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-container">
            {listUser?.map((user, userIndex) => (
              <>
                {trueFriend.filter((e) => e.friendTwo === user.userId)[0] !==
                undefined ? (
                  <></>
                ) : (
                  <>
                    {rejectFriend.filter(
                      (e) => e.friendTwo === user.userId
                    )[0] ? (
                      <></>
                    ) : (
                      <>
                        <div key={userIndex} className="card">
                          <Card style={{ width: "225px" }}>
                            <Link
                              className="nav-link active"
                              aria-current="page"
                              to={`/${user.userId}/`}
                            >
                              <div className="card-img-container">
                                <Card.Img
                                  variant="top"
                                  height={"215px"}
                                  src={user.avatarDefault}
                                />
                              </div>
                            </Link>
                            <Card.Body>
                              <Card.Title>
                                {user.firstName} {user.surName}
                              </Card.Title>
                              <Card.Text>1 bạn chung</Card.Text>
                              {requestFriend.filter(
                                (e) => e.friendTwo === user.userId
                              )[0] ? (
                                <>
                                  <div className="card-button-container">
                                    <Button
                                      onClick={() =>
                                        handleCancelAddFriend(user.userId)
                                      }
                                      variant="primary"
                                    >
                                      <i className="fas fa-user-times"></i> Hủy
                                      lời mời
                                    </Button>
                                  </div>
                                </>
                              ) : pendingFriend.filter(
                                  (e) => e.friendTwo === user.userId
                                )[0] ? (
                                <>
                                  <div className="card-button-container">
                                    <Button
                                      onClick={() => handleConfirm(user.userId)}
                                      variant="primary"
                                    >
                                      <div>Xác nhận</div>
                                    </Button>
                                    <Button variant="secondary">
                                      <div>Xóa</div>
                                    </Button>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="card-button-container">
                                    <Button
                                      variant="primary"
                                      onClick={() =>
                                        handleAddFriend(user.userId)
                                      }
                                    >
                                      <div>Kết bạn</div>
                                    </Button>
                                    <Button
                                      onClick={() =>
                                        handleDisappear(user.userId)
                                      }
                                      variant="secondary"
                                    >
                                      <div>Xóa</div>
                                    </Button>
                                  </div>
                                </>
                              )}
                            </Card.Body>
                          </Card>
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            ))}
          </div>
        </Modal.Body>
      </Modal>
      {/* MODAL FIND FRIEND END*/}
    </>
  );
}

export default UserMainFriends;

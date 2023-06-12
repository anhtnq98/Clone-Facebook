import React, { useEffect, useState } from "react";
import "./UserMainFriends.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function UserMainFriends(props) {
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
  });
  //<<<<<<<<<<<<<<<<<< ================================= MY SQL FRIENDS END=================================================== >>>>>>>>>>>>>>//

  // List kết bạn trong đó không có bạn bè và chính chủ
  const listUser = props.listUser.filter((e) => e.userId !== saveFlag.userId);

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

  const handleAddFriend = () => {
    
  }

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
            {friends !== null ? (
              friends?.map((friend, friendIndex) => (
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
                        <i class="fas fa-ellipsis-h"></i>
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
        <Modal.Body></Modal.Body>
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
                {friends.filter((e) => e.friendTwo === user.userId)[0] !==
                undefined ? (
                  <></>
                ) : (
                  <>
                    <div key={userIndex} className="card">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to={`/${user.userId}/`}
                      >
                        <Card style={{ width: "225px" }}>
                          <div className="card-img-container">
                            <Card.Img
                              variant="top"
                              height={"215px"}
                              src={user.avatarDefault}
                            />
                          </div>
                          <Card.Body>
                            <Card.Title>
                              {user.firstName} {user.surName}
                            </Card.Title>
                            <Card.Text>1 bạn chung</Card.Text>
                            <div className="card-button-container">
                              <Button variant="primary">
                                <div onClick={handleAddFriend}>Kết bạn</div>
                              </Button>
                              <Button variant="secondary">
                                <div>Xóa</div>
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
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

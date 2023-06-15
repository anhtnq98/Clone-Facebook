import React, { useEffect, useRef, useState } from "react";
import "./UserMainHeader.css";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { storage } from "../../../../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";

function UserMainHeader() {
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  // Lấy dữ liệu từ users
  const id = saveFlag.userId;
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

  const trueFriend = friends.filter((e, i) => e.friendStatus === 2);

  const navLinkClassName = ({ isActive }) =>
    isActive ? "user-main-nav-active" : "user-main-nav";

  // =================================== MODAL =============================>>>>>>>>>>>>>>>>>>>>>> //
  // Modal bg
  const [showEditBackgroundIMG, setShowEditBackgroundIMG] = useState(false);
  const handleCloseEditBackgroundIMG = () => setShowEditBackgroundIMG(false);
  const handleShowEditBackgroundIMG = () => setShowEditBackgroundIMG(true);
  // Modal avatar
  const [showEditAvatar, setShowEditAvatar] = useState(false);
  const handleCloseEditAvatar = () => setShowEditAvatar(false);
  const handleShowEditAvatar = () => setShowEditAvatar(true);
  // =================================== MODAL END=============================>>>>>>>>>>>>>>>>>>>>>> //

  // =================================== UPLOAD =============================>>>>>>>>>>>>>>>>>>>>>> //
  // State upload bg lên
  const [bgImgPreview, setBgImgPreview] = useState(null);
  const [bgImgUpload, setBgImgUpload] = useState(null);
  // State upload avatar lên
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarUpload, setAvatarUpload] = useState(null);

  // State lấy url ảnh về
  const [bgUrls, setBgUrls] = useState([]);
  const [avatarUrls, setAvatarUrls] = useState([]);

  // Tạo storage lưu trữ từ dịch vụ của firebase
  // storage bg
  const bgsListRef = ref(
    storage,
    `users/${saveFlag.surName}-${saveFlag.firstName}/photos/background`
  );
  // storage avatar
  const avatarsListRef = ref(
    storage,
    `users/${saveFlag.surName}-${saveFlag.firstName}/photos/avatar`
  );

  //Hàm đọc ảnh input bg

  const handleBgChange = (e) => {
    const bgFile = e.target.files[0];
    if (bgFile) {
      setBgImgUpload(bgFile);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setBgImgPreview(reader.result);
      });
      reader.readAsDataURL(bgFile);
    }
  };

  //Hàm đọc ảnh input avatar
  const handleAvatarChange = (e) => {
    const avatarFile = e.target.files[0];
    if (avatarFile) {
      setAvatarUpload(avatarFile);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setAvatarPreview(reader.result);
      });
      reader.readAsDataURL(avatarFile);
    }
  };

  // Lấy thời gian hiện tại
  const today = new Date();
  const date =
    today.getFullYear() +
    "" +
    (today.getMonth() < 10
      ? "0" + (today.getMonth() + 1).toString()
      : today.getMonth() + 1) +
    "" +
    (today.getDate() < 10 ? "0" + today.getDate().toString() : today.getDate());
  const time =
    (today.getHours() < 10
      ? "0" + today.getHours().toString()
      : today.getHours()) +
    "" +
    (today.getMinutes() < 10
      ? "0" + today.getMinutes().toString()
      : today.getMinutes()) +
    "" +
    (today.getSeconds() < 10
      ? "0" + today.getSeconds().toString()
      : today.getSeconds());
  const dateTime = Number(date + time);

  // Viết hàm upload bg
  const handleUploadBg = () => {
    if (bgImgUpload == null) {
      toast.warning("Ảnh bìa chưa được chọn", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }
    const bgListRef = ref(
      storage,
      `users/${saveFlag.surName}-${saveFlag.firstName}/photos/background/${dateTime}_${bgImgUpload.name}`
    );
    uploadBytes(bgListRef, bgImgUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setBgUrls((prev) => [...prev, url]);
      });
    });
    toast.success("Ảnh bìa đang được tải lên", {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "foo-bar",
    });
  };

  // Viết hàm upload avatar
  const handleUploadAvatar = () => {
    if (avatarUpload == null) {
      toast.warning("Ảnh đại diện chưa được chọn", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }
    const avatarListRef = ref(
      storage,
      `users/${saveFlag.surName}-${saveFlag.firstName}/photos/avatar/${dateTime}_${avatarUpload.name}`
    );
    uploadBytes(avatarListRef, avatarUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setAvatarUrls((prev) => [...prev, url]);
      });
    });
    toast.success("Ảnh đại diện đã được tải lên", {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "foo-bar",
    });
  };

  const inputRef = useRef(null);

  // Hàm update bg
  const handleUpdateBg = async () => {
    const backgroundDefault = bgUrls[bgUrls.length - 1];
    await axios.put(
      `http://localhost:5000/api/v1/users/upload-background/${saveFlag.userId}`,
      { backgroundDefault: backgroundDefault }
    );
    toast.success("Cập nhật ảnh bìa thành công", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    inputRef.current.value = null;
    setBgImgPreview(null);
    handleCloseEditBackgroundIMG();
    loadData();
  };

  // Hàm update avatar
  const handleUpdateAvatar = async () => {
    const avatarDefault = avatarUrls[avatarUrls.length - 1];
    await axios.put(
      `http://localhost:5000/api/v1/users/upload-avatar/${saveFlag.userId}`,
      { avatarDefault: avatarDefault }
    );
    toast.success("Cập nhật ảnh đại diện thành công", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    localStorage.setItem(
      "saveFlag",
      JSON.stringify({
        userId: saveFlag.userId,
        firstName: saveFlag.firstName,
        surName: saveFlag.surName,
        avatarDefault: avatarDefault,
      })
    );
    setAvatarPreview(null);
    inputRef.current.value = null;
    handleCloseEditAvatar();
    loadData();
  };

  // Lấy dữ liệu trả về từ firebase
  useEffect(() => {
    listAll(bgsListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setBgUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  useEffect(() => {
    listAll(avatarsListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setAvatarUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // =================================== UPLOAD END=============================>>>>>>>>>>>>>>>>>>>>>> //

  return (
    <>
      <div className="user-main-header">
        <div
          style={{
            backgroundImage: `url(${user.backgroundDefault})`,
          }}
          className="bg-avatar"
        >
          <div className="bg-avatar-optional">
            <i className="fas fa-smile"></i> <span> Tạo với avatar</span>
          </div>
          <div
            onClick={handleShowEditBackgroundIMG}
            style={{ marginBottom: "15px" }}
            className="bg-avatar-optional"
          >
            <i className="fas fa-camera"></i> <span> Chỉnh sửa ảnh bìa</span>
          </div>
        </div>
        <div className="user-main-avatar-info-container">
          <div className="user-main-avatar-info">
            <div className="user-main-avatar-info-left">
              <div onClick={handleShowEditAvatar} className="user-main-avatar">
                <img src={user.avatarDefault} alt="" />
              </div>
              <div className="user-main-info">
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
                      {trueFriend.length} bạn bè
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
                  {trueFriend.length === 1 ? (
                    <>
                      <div className="user-main-info-friend-first">
                        <img src={friends[0]?.avatarDefault} alt="" />
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
                <div
                  onClick={handleShowEditAvatar}
                  className="user-main-info-camera"
                >
                  <i className="fas fa-camera-retro"></i>
                </div>
              </div>
            </div>
            <div className="user-main-avatar-info-right">
              <div className="user-main-add-news">
                <i className="fas fa-plus"></i> Thêm vào tin
              </div>
              <div className="user-main-edit">
                <i className="fas fa-pen"></i> Chỉnh sửa trang cá nhân
              </div>
            </div>
          </div>
          <div className="user-main-nav-container">
            <NavLink className={navLinkClassName} to={`/${saveFlag.userId}/`}>
              Bài viết
            </NavLink>
            <NavLink
              className={navLinkClassName}
              to={`/${saveFlag.userId}/about`}
            >
              Giới thiệu
            </NavLink>
            <NavLink
              className={navLinkClassName}
              to={`/${saveFlag.userId}/friends`}
            >
              Bạn bè
            </NavLink>
            <NavLink
              className={navLinkClassName}
              to={`/${saveFlag.userId}/photos`}
            >
              Ảnh
            </NavLink>
            <NavLink
              className={navLinkClassName}
              to={`/${saveFlag.userId}/videos`}
            >
              Video
            </NavLink>
          </div>
        </div>
      </div>

      {/* MODAL EDIT BACKGROUND IMG */}
      <Modal show={showEditBackgroundIMG} onHide={handleCloseEditBackgroundIMG}>
        <Modal.Header closeButton>
          <Modal.Title>Ảnh bìa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            ref={inputRef}
            type="file"
            name="bg"
            onChange={handleBgChange}
          />
          <div className="img-upload">
            <img src={bgImgPreview} alt="" />
            <Button variant="primary" onClick={handleUploadBg}>
              Tải ảnh bìa lên
            </Button>{" "}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdateBg}>
            Thay đổi ảnh bìa
          </Button>{" "}
        </Modal.Footer>
      </Modal>
      {/* MODAL EDIT BACKGROUND IMG END*/}

      {/* MODAL EDIT AVATAR IMG */}
      <Modal show={showEditAvatar} onHide={handleCloseEditAvatar}>
        <Modal.Header closeButton>
          <Modal.Title>Ảnh đại diện</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            ref={inputRef}
            type="file"
            name="avatar"
            onChange={handleAvatarChange}
          />
          <div className="img-upload">
            <img src={avatarPreview} alt="" />
            <Button variant="primary" onClick={handleUploadAvatar}>
              Tải ảnh đại diện
            </Button>{" "}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdateAvatar}>
            Thay đổi ảnh đại diện
          </Button>{" "}
        </Modal.Footer>
      </Modal>
      {/* MODAL EDIT BACKGROUND IMG END*/}

      <ToastContainer autoClose={1500} />
    </>
  );
}

export default UserMainHeader;

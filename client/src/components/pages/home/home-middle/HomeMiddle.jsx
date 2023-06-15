import React, { useEffect, useState } from "react";
import StoryCarousel from "./carousel/StoryCarousel";
import "./HomeMiddle.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import UserHomePost from "../../user/user-main/user-main-bottom/user-main-home/user-home-post/UserHomePost";

function HomeMiddle(userProp) {
  const user = userProp.user;
  // CREATE POST MODAL
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));

  const [posts, setPosts] = useState([]);
  const loadPost = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/posts`
    );
    setPosts(result.data.data);
  };

  useEffect(() => {
    loadPost();
  }, []);

  // CREATE POST MODAL
  const [showCreatePost, setShowCreatePost] = useState(false);
  const handleCloseCreatePost = () => setShowCreatePost(false);
  const handleShowCreatePost = () => setShowCreatePost(true);

  const [postIconStyle, setPostIconStyle] = useState("post-icon");
  const [postIconActive, setPostIconActive] = useState(false);
  const postIcon = [
    "🙂",
    "😀",
    "😄",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😌",
    "😉",
    "😏",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "🤗",
    "😳",
    "🙃",
    "😈",
    "😛",
    "😝",
    "😜",
    "😋",
    "🤓",
    "😎",
    "🤑",
    "😒",
    "😞",
    "😔",
    "😖",
    "😓",
    "😢",
    "😭",
    "😟",
    "😣",
    "😩",
    "😫",
    "😕",
    "🤔",
    "🙄",
    "😤",
    "😇",
    "😠",
    "😶",
    "🤐",
    "😐",
    "😑",
    "😯",
    "😧",
    "😨",
    "😰",
    "😱",
    "😴",
    "😬",
    "🤥",
    "🤒",
    "😷",
    "🤕",
    "😵",
    "🤢",
    "🤡",
    "👶",
    "👦",
    "👧",
    "👨",
    "👩",
    "👴",
    "👵",
    "👲",
    "🤵",
    "👰",
    "🤴",
    "👸",
  ];

  const handleShowIcons = () => {
    if (postIconActive === false) {
      setPostIconActive(true);
      setPostIconStyle("post-icon-active");
      return;
    } else {
      setPostIconActive(false);
      setPostIconStyle("post-icon");
      return;
    }
  };

  // =================================== UPLOAD =============================>>>>>>>>>>>>>>>>>>>>>> //
  // State upload ảnh lên
  const [postImgPreview, setPostImgPreview] = useState(null);
  const [postImgUpload, setPostImgUpload] = useState(null);

  // State lấy url ảnh về
  const [postUrls, setPostUrls] = useState([]);

  // Tạo storage lưu trữ từ dịch vụ của firebase
  const postsListRef = ref(
    storage,
    `users/${saveFlag.surName}-${saveFlag.firstName}/photos/posts`
  );

  //Hàm đọc ảnh input bg

  const handlePostImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImgUpload(file);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setPostImgPreview(reader.result);
      });
      reader.readAsDataURL(file);
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
  const handleUploadPostImage = () => {
    if (postImgUpload == null) {
      toast.warning("Ảnh chưa được chọn", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }

    const postListRef = ref(
      storage,
      `users/${saveFlag.surName}-${saveFlag.firstName}/photos/posts/${dateTime}_${postImgUpload.name}`
    );
    uploadBytes(postListRef, postImgUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setPostUrls((prev) => [...prev, url]);
      });
    });
    toast.success("Ảnh đang được tải lên", {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "foo-bar",
    });
  };

  // Lấy dữ liệu trả về từ firebase
  useEffect(() => {
    listAll(postsListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPostUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const now = new Date();
  const createDateTime =
    now.getDate() +
    " Tháng " +
    (now.getMonth() + 1) +
    " Năm " +
    now.getFullYear();
  // Post Value
  const author = saveFlag.userId;
  const postImage = postUrls[postUrls.length - 1];
  const [postContent, setPostContent] = useState("");
  const [postStatus, setPostStatus] = useState("");
  console.log(postContent);

  const handleAddPostIcon = (icon) => {
    setPostContent([...postContent, icon].join(""));
  };

  const createPostValue = {
    author: author,
    postImage: postImage,
    postContent: postContent,
    postStatus: postStatus,
    createDateTime: createDateTime,
    updateDateTime: null,
    friendTag: null,
    userPage: author,
  };

  const handleAddPost = async () => {
    if (
      createPostValue.postContent === "" ||
      createPostValue.postStatus === ""
    ) {
      toast.warning("Thông tin không được để trống", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }

    toast.success("Thêm bài post thành công!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    await axios.post("http://localhost:5000/api/v1/posts", createPostValue);
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  return (
    <>
      <div className="home-middle">
        <StoryCarousel user={user} />
        {/* NEWFEED INPUT */}
        <div className="create-newfeed-container">
          <div className="create-newfeed-input-container">
            <div className="create-newfeed-avatar">
              <img src={user.avatarDefault} alt="" />
            </div>
            <div
              onClick={handleShowCreatePost}
              className="create-newfeed-input"
            >
              {user.surName} ơi, bạn đang nghĩ gì thế?
            </div>
          </div>
          <div className="create-newfeed-videos-images">
            <div className="create-newfeed-videos">
              <i className="fa-sharp fa-solid fa-video"></i> Video trực tiếp
            </div>
            <div
              onClick={handleShowCreatePost}
              className="create-newfeed-images"
            >
              <i className="fa-sharp fa-solid fa-images"></i> Ảnh/video
            </div>
            <div className="create-newfeed-smile">
              <i className="fa-sharp fa-solid fa-face-laugh"></i> Cảm xúc/hoạt
              động
            </div>
          </div>
        </div>
        {/* NEWFEED INPUT END */}
        {/* NEWFEED BLOCK */}
        {posts?.map((post, postIndex) => (
          <UserHomePost post={post} />
        ))}

        {/* NEWFEED BLOCK END*/}

        {/* CREATE POSTS MODAL */}
        <Modal
          className="create-post-modal-container"
          show={showCreatePost}
          onHide={handleCloseCreatePost}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="create-post-modal-title">Tạo bài viết</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="create-post-modal-input">
              <div className="create-post-modal-head">
                <div className="create-post-modal-avatar">
                  <img src={saveFlag.avatarDefault} alt="" />
                </div>
                <div>
                  <div className="create-post-modal-username">
                    {saveFlag.firstName} {saveFlag.surName}
                  </div>
                  <div style={{ padding: "3px 0 0 13px" }}>
                    {" "}
                    <Form.Select
                      onChange={(e) => setPostStatus(e.target.value)}
                      size="sm"
                      value={postStatus}
                    >
                      <option value="">Chọn quyền riêng tư</option>
                      <option value={0}>🌏 Công khai</option>
                      <option value={1}>👥 Bạn bè</option>
                      <option value={2}>🔒 Riêng tư</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
              <div className="create-post-modal-middle">
                <div className="modal-middle-input">
                  <textarea
                    name="postContent"
                    type="text"
                    onChange={(e) => setPostContent([e.target.value])}
                    value={postContent}
                    placeholder={`${saveFlag.surName} ơi, bạn đang nghĩ gì thế?`}
                  ></textarea>

                  <i onClick={handleShowIcons} className="far fa-smile"></i>

                  <div className={postIconStyle}>
                    <p>Mặt cười & hình người</p>{" "}
                    {postIcon?.map((icon, iconIndex) => (
                      <>
                        <span
                          key={iconIndex}
                          onClick={() => handleAddPostIcon(icon)}
                        >
                          {icon}
                        </span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Dragger">
                <input
                  type="file"
                  name="postImage"
                  onChange={handlePostImageChange}
                />
                <div className="img-upload">
                  <img src={postImgPreview} alt="" />
                  <Button variant="primary" onClick={handleUploadPostImage}>
                    Tải ảnh lên
                  </Button>{" "}
                </div>
              </div>
              <div className="create-post-modal-bottom">
                <div>Thêm vào bài viết của bạn</div>
                <div>
                  <i className="fas fa-user-tag"></i>
                </div>
              </div>
            </div>
            <div onClick={handleAddPost} className="create-post-modal-submit">
              Đăng
            </div>
          </Modal.Body>
        </Modal>
        {/* CREATE POSTS MODAL END*/}
      </div>
      <ToastContainer autoClose={2500} />
    </>
  );
}

export default HomeMiddle;

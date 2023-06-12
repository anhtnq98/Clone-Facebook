import React, { useState } from "react";
import "../../../user-main/user-main-bottom/user-main-home/UserMainHome.css";
import Modal from "react-bootstrap/Modal";
import { message, Upload } from "antd";
import { useOutletContext } from "react-router-dom";
import OtherLeftAbout from "./other-left-about/OtherLeftAbout";
import OtherLeftFriends from "./other-left-friends/OtherLeftFriends";
import OtherLeftPhotos from "./other-left-photos/OtherLeftPhotos";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function OtherMainHome() {
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  const [user] = useOutletContext();
  // console.log(user, "user ======>");
  // CREATE POST MODAL
  const [showCreatePost, setShowCreatePost] = useState(false);
  const handleCloseCreatePost = () => setShowCreatePost(false);
  const handleShowCreatePost = () => setShowCreatePost(true);

  // Post Value
  const [createPostValue, setCreatePostValue] = useState("");
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
  const handlePostChange = (e) => {
    setCreatePostValue([e.target.value]);
  };

  const handleAddPostIcon = (icon) => {
    setCreatePostValue([...createPostValue, icon].join(""));
  };

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
  return (
    <div className="user-main-home">
      <div className="user-main-home-left">
        {/* LEFT BLOCK ABOUT */}
        <OtherLeftAbout />
        {/* LEFT BLOCK ABOUT END*/}
        {/* LEFT BLOCK PHOTOS */}
        <OtherLeftPhotos />
        {/* LEFT BLOCK PHOTOS END */}
        {/* LEFT BLOCK FRIENDS */}
        <OtherLeftFriends />
        {/* LEFT BLOCK FRIENDS END*/}
        <div className="user-main-home-left-footer">
          Quyền riêng tư · Điều khoản · Quảng cáo · Lựa chọn quảng cáo · Cookie
          · Meta © 2023
        </div>
      </div>
      <div className="user-main-home-right">
        {/* NEWFEED INPUT */}
        <div
          style={{ borderRadius: "8px", marginTop: "5px", width: "545px" }}
          className="create-newfeed-container"
        >
          <div className="create-newfeed-input-container">
            <div className="create-newfeed-avatar">
              <img src={saveFlag.avatarDefault} alt="" />
            </div>
            <div
              style={{ padding: "5px 15px" }}
              onClick={handleShowCreatePost}
              className="create-newfeed-input"
            >
              Đăng bài lên trang của {user.surName}...
            </div>
          </div>
          <div className="create-newfeed-videos-images">
            <div className="create-newfeed-videos">
              <i class="fa-sharp fa-solid fa-video"></i> Video trực tiếp
            </div>
            <div
              onClick={handleShowCreatePost}
              className="create-newfeed-images"
            >
              <i class="fa-sharp fa-solid fa-images"></i> Ảnh/video
            </div>
            <div className="create-newfeed-smile">
              <i class="fa-sharp fa-solid fa-face-laugh"></i> Cảm xúc/hoạt động
            </div>
          </div>
        </div>
        {/* NEWFEED INPUT END */}
        {/* NEWFEED BLOCK */}
        <div style={{ width: "545px" }} className="newfeed-basic-container">
          <div className="newfeed-basic-header">
            <div className="newfeed-basic-left">
              <div className="newfeed-basic-avatar">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-01/bts_jungkook_pics.jpg"
                  alt=""
                />
              </div>
              <div className="newfeed-basic-username-underinfo">
                <div className="newfeed-basic-username">OMG My Kookie</div>
                <div className="newfeed-basic-underinfo">
                  <span> 1 giờ ・ </span>{" "}
                  <span>
                    <i class="fa-solid fa-user-group"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="newfeed-basic-right">
              <div className="newfeed-basic-right-small-icon">
                <div className="dot">
                  <div>...</div>
                </div>
              </div>
              <div className="newfeed-basic-right-small-icon">
                <div className="newfeed-basic-delete">X</div>
              </div>
            </div>
          </div>
          <div className="newfeed-basic-content">
            <div className="main-content">
              Trên mạng xã hội Weverse, Jungkook thông báo rằng chính anh đã xoá
              tài khoản cá nhân và không có ý định tiếp tục dùng Instagram. Nam
              ca sĩ cũng phủ nhận việc tài khoản bị hack hoặc bị chiếm đoạt tài
              khoản mạng xã hội. Thành viên sinh năm 1997 của BTS không nêu rõ
              lý do anh quyết định xóa Instagram cá nhân. Jungkook đã xoá
              Instagram sau hơn 1 năm sử dụng nền tảng này để giao lưu với người
              hâm mộ. Tất cả các thành viên của BTS đã tạo tài khoản Instagram
              cá nhân vào ngày 6/12/2021, sau 8 năm hoạt động. Vào thời điểm đó,
              công ty quản lý Big Hit Music cho biết: "Chúng tôi hiểu rằng các
              thành viên mở Instagram để thể hiện cá tính của mình với tư cách
              là một nghệ sĩ và để giao tiếp với người hâm mộ theo nhiều cách
              khác nhau". Sau khi mở tài khoản Instagram cá nhân, Jungkook đã
              đạt con số ấn tượng là hơn 50 triệu người theo dõi trước khi xóa
              ứng dụng này. Anh là nam nghệ sĩ Hàn Quốc có lượng người theo dõi
              cao thứ 2 trên Instagram, chỉ đứng sau V, hiện có gần 56 triệu
              người theo dõi. Trang Seoulspace ước tính mỗi bài đăng quảng cáo
              trên Instagram cá nhân của Jungkook có thể mang lại doanh thu
              khoảng 150.000 USD
            </div>
            <span className="three-dots">...</span>
            <div className="content-show-more">Xem thêm</div>
          </div>
          <div className="newfeed-basic-image">
            <img
              src="https://www.okchicas.com/wp-content/uploads/2022/11/Jungkook-de-BTS-sera-parte-de-la-inauguracion-del-mundial-Catar-2022.jpg"
              alt=""
            />
          </div>
          <div className="newfeed-basic-comment-container">
            <div className="comment-container-head">
              <div>
                <span className="head-react-icon">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2Flove.png?alt=media&token=8ad9b206-3274-4ba5-97e9-94607f590af6"
                    alt=""
                  />
                </span>
                <span className="head-react-icon-next">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2Fhaha.png?alt=media&token=867338ac-ca9a-4030-8c1a-e8d172ee5e5f"
                    alt=""
                  />
                </span>
                <span className="head-react-icon-next">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2Flike.png?alt=media&token=7a8f12bb-dcb0-4772-b697-cbc497338882"
                    alt=""
                  />
                </span>
                <span className="head-react-usernames">
                  {" "}
                  Đình Ngọc, Đoàn Trang và 55 người khác
                </span>
              </div>
              <div className="comment-share-quantity">
                <div>
                  <span>5555 </span>
                  <span>
                    <i class="fa-regular fa-message"></i>
                  </span>
                </div>
                <div>
                  <span>5555 </span>
                  <span>
                    <i class="fa-solid fa-share"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="react-comment-share">
              <div className="react">
                <i class="fa-regular fa-thumbs-up"></i> Thích
                <div className="react-icons-hover">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2Flike.gif?alt=media&token=2f78a644-1ee2-4aac-9b51-cae249ac9df2"
                    alt="like"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2Flove.gif?alt=media&token=d9a7a027-c3b7-480c-8717-8acbb885003b"
                    alt="love"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2Fcare.gif?alt=media&token=a1ec9860-354f-418b-b13b-d314c98c9e1d"
                    alt="care"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2Fhaha.gif?alt=media&token=1ee190dd-1fc1-4c40-a54f-25e1885a7d98"
                    alt="haha"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2Fwow.gif?alt=media&token=3f714cbc-42c0-48b0-a45f-7dc47a84a535"
                    alt="suprise"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2Fsad.gif?alt=media&token=58cb7d71-9e3d-4005-aa66-3eaa32f0b08e"
                    alt="sad"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2Fangry.gif?alt=media&token=d7795cd3-3387-4a93-a176-575f1ed5c70f"
                    alt="angry"
                  />
                </div>
              </div>
              <div className="comment">
                <i class="fa-regular fa-message"></i> Bình luận
              </div>
              <div className="share">
                <i class="fa-solid fa-share"></i> Chia sẻ
              </div>
            </div>
            <div className="comment-inputer">
              <div className="comments-block-avatar">
                <img
                  src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                  alt=""
                />
              </div>
              <div className="comments-block-input">
                <input type="text" placeholder="Viết bình luận..." />
              </div>
            </div>
            <div className="comments-container">
              <div className="show-more-comment">Xem thêm bình luận</div>
              <div className="comments-block">
                <div className="comments-block-avatar">
                  <img
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                    alt=""
                  />
                </div>
                <div>
                  <div className="comments-block-header">
                    <div className="comments-block-header-username">
                      My Husbando
                    </div>
                    <div className="comments-block-header-comments">
                      <span className="comments-content">
                        Ối giời ơi đẹp trai thế!!!!! Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Quod maiores voluptates
                        facilis suscipit neque necessitatibus consequuntur omnis
                        delectus perspiciatis asperiores eveniet voluptatem
                        ullam odit a, illo nemo error unde eum! Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Placeat ea,
                        non corrupti fugit totam consequuntur nisi harum eos
                        quaerat cumque vel. Est quia in possimus reprehenderit,
                        et non ullam commodi?
                      </span>
                    </div>
                    <span>... </span>
                    <span className="comments-content-show-more">Xem thêm</span>
                  </div>
                  <div>
                    <span className="comment-like">Thích</span>
                    <span className="comment-res">Phản hồi</span>
                    <span className="comment-time">5 giờ</span>
                    <span className="comment-fix">Đã chỉnh sửa</span>
                  </div>
                  <div className="comments-content-show-more-res">
                    <img
                      width={"20px"}
                      src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Farrow-turn-down-right-svgrepo-com%20(1).png?alt=media&token=9189f4a9-5adc-48a5-a4c1-b2d13e08e33b"
                      alt=""
                    />
                    <div>
                      Xem tất cả <span>3</span> phản hồi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* NEWFEED BLOCK END*/}
      </div>
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
                <img
                  src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                  alt=""
                />
              </div>
              <div>
                <div className="create-post-modal-username">Anh Thân Ngọc</div>
                <div className="create-post-modal-status">
                  <div>
                    <i className="fas fa-globe-asia"></i>{" "}
                  </div>
                  <div>Công khai</div>
                  <div style={{ marginBottom: "8px" }}>
                    <i className="fas fa-sort-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="create-post-modal-middle">
              <div className="modal-middle-input">
                <textarea
                  name=""
                  id=""
                  type="text"
                  value={createPostValue}
                  onChange={handlePostChange}
                  placeholder="Thân Ngọc ơi, bạn đang nghĩ gì thế?"
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
              <Dragger {...props}>
                <div className="ant-upload-container">
                  <p className="ant-upload-drag-icon">
                    <i class="far fa-images"></i>
                  </p>
                  <p className="ant-upload-text">Thêm ảnh/video</p>
                  <p className="ant-upload-hint">hoặc kéo và thả</p>
                </div>
              </Dragger>
            </div>
            <div className="create-post-modal-bottom">
              <div>Thêm vào bài viết của bạn</div>
              <div>
                <i class="fas fa-user-tag"></i>
              </div>
            </div>
          </div>
          <div className="create-post-modal-submit">Đăng</div>
        </Modal.Body>
      </Modal>
      {/* CREATE POSTS MODAL END*/}
    </div>
  );
}

export default OtherMainHome;

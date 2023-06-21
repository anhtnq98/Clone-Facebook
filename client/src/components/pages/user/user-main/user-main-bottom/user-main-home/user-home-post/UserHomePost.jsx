import axios from "axios";
import React, { useEffect, useState } from "react";
import UserHomeReplies from "./UserHomeReplies";
import { ToastContainer, toast } from "react-toastify";

function UserHomePost(props) {
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  const post = props.post;
  //   Lấy thông tin react
  const [react, setReact] = useState([]);
  const loadReact = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/posts/react-comment/react/${post.postId}`
    );
    setReact(result.data.data);
  };
  useEffect(() => {
    loadReact();
  }, []);

  const myReact = react.filter((e) => e.author === saveFlag.userId)[0];
  console.log(myReact);

  // Lấy thông tin comment
  const [comments, setComment] = useState([]);
  const loadComment = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/posts/react-comment/comment/${post.postId}`
    );
    setComment(result.data.data);
  };
  useEffect(() => {
    loadComment();
  }, []);

  const [showListComments, setShowListComment] = useState(false);
  const [showMorePost, setShowMorePost] = useState("main-content");
  const reactValue = ["like", "love", "care", "haha", "wow", "sad", "angry"];
  const reactText = [
    "Thích",
    "Yêu thích",
    "Thương thương",
    "Ha ha",
    "Wow",
    "Buồn",
    "Phẫn nộ",
  ];
  const reactColor = [
    "react-like",
    "react-love-angry",
    "react-care",
    "react-care-haha-wow-sad",
    "react-care-haha-wow-sad",
    "react-care-haha-wow-sad",
    "react-love-angry",
  ];

  const [showReact, setShowReact] = useState("react-icons-hover-non");

  const [reactValueView, setReactValueView] = useState("");
  const [reactValueText, setReactValueText] = useState("");
  const [reactValueStyle, setValueStyle] = useState("");
  console.log(reactValueView, reactValueText, reactValueStyle);

  const myReactValue = {
    react: reactValueView,
    author: saveFlag.userId,
    postId: post.postId,
    reactText: reactValueText,
    reactStyle: reactValueStyle,
  };

  const updateMyReactValue = {
    react: reactValueView,
    reactText: reactValueText,
    reactStyle: reactValueStyle,
  };

  const handleReactViewChange = (react, i) => {
    setReactValueView(react);
    setReactValueText(reactText[i]);
    setValueStyle(reactColor[i]);
  };

  const handleReactView = async () => {
    if (myReact?.postId === post.postId) {
      console.log("haha");
      await axios
        .put(
          `http://localhost:5000/api/v1/posts/react-comment/react/${myReact?.reactId}`,
          updateMyReactValue
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      loadReact();
    } else {
      await axios.post(
        `http://localhost:5000/api/v1/posts/react-comment/react`,
        myReactValue
      );
      console.log("hihi");
    }
    loadReact();
  };

  const now = new Date();
  const createDateTime =
    now.getDate() +
    " Tháng " +
    (now.getMonth() + 1) +
    " Năm " +
    now.getFullYear();

  const [commentContent, setCommentContent] = useState("");

  const newComment = {
    commentContent: commentContent,
    commentLike: 0,
    commentCreateDateTime: createDateTime,
    commentUpdateDateTime: null,
    userId: saveFlag.userId,
    postId: post.postId,
  };

  const handleAddComment = async () => {
    if (newComment.commentContent === "") {
      toast.warning("Thông tin không được để trống", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }

    toast.success("Thêm bình luận thành công!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    await axios.post(
      "http://localhost:5000/api/v1/posts/react-comment/comment",
      newComment
    );
    setCommentContent("");
    loadComment();
  };

  const handleDeletePost = async () => {
    await axios.put(`http://localhost:5000/api/v1/posts/${post.postId}`);
    setTimeout(() => {
      window.location.href();
    }, 1500);
    toast.success("Xóa bài viết thành công!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  return (
    <>
      <div
        onClick={() => setShowReact("react-icons-hover-non")}
        style={{ width: "545px" }}
        className="newfeed-basic-container"
      >
        <div className="newfeed-basic-header">
          <div className="newfeed-basic-left">
            <div className="newfeed-basic-avatar">
              <img src={post.avatarDefault} alt="" />
            </div>
            <div className="newfeed-basic-username-underinfo">
              <div className="newfeed-basic-username">
                {post.firstName} {post.surName}
              </div>
              <div className="newfeed-basic-underinfo">
                <span> {post.createDateTime} ・ </span>{" "}
                <span>
                  {/* CHẾ ĐỘ RIÊNG TƯ: 0 là công khai, 1 là chế độ bạn bè, 2 là chỉ mình mình thấy */}
                  {post.postStatus === 0 ? (
                    <>
                      <i class="fa-solid fa-earth-asia"></i>
                    </>
                  ) : post.postStatus === 1 ? (
                    <>
                      {" "}
                      <i className="fa-solid fa-user-group"></i>
                    </>
                  ) : (
                    <>
                      <i class="fa-solid fa-lock"></i>
                    </>
                  )}
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
            <div
              onClick={handleDeletePost}
              className="newfeed-basic-right-small-icon"
            >
              <div className="newfeed-basic-delete">X</div>
            </div>
          </div>
        </div>
        <div className="newfeed-basic-content">
          <div className={showMorePost}>{post.postContent}</div>
          {post.postContent.length > 687 && showMorePost === "main-content" ? (
            <>
              <span className="three-dots">...</span>
              <div
                onClick={() => setShowMorePost("main-content-active")}
                className="content-show-more"
              >
                Xem thêm
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="newfeed-basic-image">
          <img src={post.postImage} alt="" />
        </div>
        <div className="newfeed-basic-comment-container">
          <div className="comment-container-head">
            <div>
              <span className="head-react-icon">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2F${
                    react[react.length - 1]?.react
                  }.png?alt=media&token=8ad9b206-3274-4ba5-97e9-94607f590af6`}
                  alt=""
                />
              </span>
              <span className="head-react-icon-next">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2F${
                    react[react.length - 2]?.react
                  }.png?alt=media&token=8ad9b206-3274-4ba5-97e9-94607f590af6`}
                  alt=""
                />
              </span>
              <span className="head-react-icon-next">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2F${
                    react[react.length - 3]?.react
                  }.png?alt=media&token=8ad9b206-3274-4ba5-97e9-94607f590af6`}
                  alt=""
                />
              </span>
              {react.length <= 1 ? (
                <>
                  <span className="head-react-usernames">
                    {" "}
                    {react[react.length - 1]?.firstName}{" "}
                    {react[react.length - 1]?.surName}{" "}
                  </span>
                </>
              ) : react.length === 2 ? (
                <>
                  <span className="head-react-usernames">
                    {" "}
                    {react[react.length - 1]?.firstName}{" "}
                    {react[react.length - 1]?.surName},{" "}
                    {react[react.length - 2]?.firstName}{" "}
                    {react[react.length - 2]?.surName}
                  </span>
                </>
              ) : (
                <>
                  <span className="head-react-usernames">
                    {" "}
                    {react[react.length - 1]?.firstName}{" "}
                    {react[react.length - 1]?.surName},{" "}
                    {react[react.length - 2]?.firstName}{" "}
                    {react[react.length - 2]?.surName} và {react.length - 2}{" "}
                    người khác
                  </span>
                </>
              )}
            </div>
            {/* REACT END */}
            <div className="comment-share-quantity">
              <div>
                <span>{comments.length} </span>
                <span>
                  <i className="fa-regular fa-message"></i>
                </span>
              </div>
              <div>
                <span>{post.shareQuantity} </span>
                <span>
                  <i className="fa-solid fa-share"></i>
                </span>
              </div>
            </div>
          </div>
          {/* REACT HOVER */}
          <div className={showReact}>
            {reactValue?.map((react, i) => (
              <>
                <img
                  onClick={handleReactView}
                  onMouseOver={() => handleReactViewChange(react, i)}
                  key={i}
                  src={`https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2F${react}.gif?alt=media&token=2f78a644-1ee2-4aac-9b51-cae249ac9df2`}
                  alt="like"
                />
              </>
            ))}
          </div>
          {/* REACT HOVER END*/}
          <div className="react-comment-share">
            <div
              onMouseOver={() => setShowReact("react-icons-hover")}
              className="react"
            >
              {/* {reactValueView} */}
              {myReact !== null && myReact?.postId === post?.postId ? (
                <>
                  <div className={myReact?.reactStyle}>
                    <img
                      width={"30px"}
                      src={`https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-react-comment%2F${myReact?.react}.png?alt=media&token=2f78a644-1ee2-4aac-9b51-cae249ac9df2`}
                      alt=""
                    />
                    <span> {myReact?.reactText}</span>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div>
                    <i className="fa-regular fa-thumbs-up"></i> Thích
                  </div>
                </>
              )}
            </div>
            <div className="comment">
              <i className="fa-regular fa-message"></i> Bình luận
            </div>
            <div className="share">
              <i className="fa-solid fa-share"></i> Chia sẻ
            </div>
          </div>

          {/* COMMENT */}
          <div className="comment-inputer">
            <div className="comments-block-avatar">
              <img src={saveFlag.avatarDefault} alt="" />
            </div>
            <div className="comments-block-input">
              <input
                onChange={(e) => setCommentContent(e.target.value)}
                type="text"
                placeholder="Viết bình luận..."
                value={commentContent}
              />
              <i class="far fa-paper-plane" onClick={handleAddComment}></i>
              {/* <button onClick={handleAddComment}>gửi</button> */}
            </div>
          </div>
          <div className="comments-container">
            {comments.length > 1 && showListComments === false ? (
              <>
                <div
                  onClick={() => setShowListComment(true)}
                  className="show-more-comment"
                >
                  Xem tất cả bình luận ({comments.length})
                </div>
              </>
            ) : comments.length > 1 && showListComments === true ? (
              <>
                {" "}
                <div
                  onClick={() => setShowListComment(false)}
                  className="show-more-comment"
                >
                  Ẩn tất cả bình luận
                </div>
              </>
            ) : (
              <></>
            )}

            {/* COMMENT BLOCK */}
            {showListComments === false ? (
              <>
                {" "}
                {comments.slice(0, 1)?.map((comment, i) => (
                  <div key={i} className="comments-block">
                    <div>
                      <div className="comments-block-flex">
                        <div className="comments-block-avatar">
                          <img src={comment.avatarDefault} alt="" />
                        </div>
                        <div className="comments-block-header">
                          <div className="comments-block-header-username">
                            {comment.firstName} {comment.surName}
                          </div>
                          <div className="comments-block-header-comments">
                            <span className="comments-content">
                              {comment.commentContent}
                            </span>
                          </div>
                          {comment.commentContent.length > 286 ? (
                            <>
                              <span>... </span>
                              <span className="comments-content-show-more">
                                Xem thêm
                              </span>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>

                      <div>
                        <span className="comment-like">
                          {comment.commentLike} Thích
                        </span>
                        <span className="comment-res">Phản hồi</span>
                        <span className="comment-time">5 giờ</span>
                        {comment.commentUpdateDateTime !== null ? (
                          <>
                            <span className="comment-fix">Đã chỉnh sửa</span>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="comments-content-show-more-res">
                        {/* REPLIES */}
                        <UserHomeReplies comment={comment} />
                        {/* REPLIES END*/}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {" "}
                {comments?.map((comment, i) => (
                  <div key={i} className="comments-block">
                    <div>
                      <div className="comments-block-flex">
                        <div className="comments-block-avatar">
                          <img src={comment.avatarDefault} alt="" />
                        </div>
                        <div className="comments-block-header">
                          <div className="comments-block-header-username">
                            {comment.firstName} {comment.surName}
                          </div>
                          <div className="comments-block-header-comments">
                            <span className="comments-content">
                              {comment.commentContent}
                            </span>
                          </div>
                          {comment.commentContent.length > 286 ? (
                            <>
                              <span>... </span>
                              <span className="comments-content-show-more">
                                Xem thêm
                              </span>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>

                      <div>
                        <span className="comment-like">
                          {comment.commentLike} Thích
                        </span>
                        <span className="comment-res">Phản hồi</span>
                        <span className="comment-time">5 giờ</span>
                        {comment.commentUpdateDateTime !== null ? (
                          <>
                            <span className="comment-fix">Đã chỉnh sửa</span>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="comments-content-show-more-res">
                        {/* REPLIES */}
                        <UserHomeReplies comment={comment} />
                        {/* REPLIES END*/}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* COMMENT BLOCK END */}
          </div>
          {/* COMMENT END*/}
        </div>
      </div>
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default UserHomePost;

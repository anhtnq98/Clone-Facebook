import axios from "axios";
import React, { useEffect, useState } from "react";

function UserHomeReplies(props) {
  const comment = props.comment;
  // Lấy thông tin replies
  const [replies, setReplies] = useState([]);
  const loadReplies = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/posts//react-comment/comment/replies/${comment.commentId}`
    );
    setReplies(result.data.data);
  };
  useEffect(() => {
    loadReplies();
  }, [comment]);

  const [showReply, setShowReply] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(
    "comments-block-header-comments"
  );

  return (
    <>
      {replies.length > 1 ? (
        <>
          <img
            width={"20px"}
            src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-icon%2Farrow-turn-down-right-svgrepo-com%20(1).png?alt=media&token=9189f4a9-5adc-48a5-a4c1-b2d13e08e33b"
            alt=""
          />
        </>
      ) : (
        <></>
      )}

      <div>
        {showReply === false ? (
          <></>
        ) : (
          <>
            {" "}
            {replies.map((reply, i) => (
              <div key={i} className="comments-block">
                <div className="reply-block-avatar">
                  <img src={reply.avatarDefault} alt="" />
                </div>
                <div>
                  <div className="comments-block-header">
                    <div className="comments-block-header-username">
                      {reply.firstName} {reply.surName}
                    </div>
                    <div className={showMoreContent}>
                      <span className="comments-content-active">
                        {reply.replyContent}
                      </span>
                    </div>

                    {reply.replyContent.length > 286 &&
                    showMoreContent === "comments-block-header-comments" ? (
                      <>
                        <span>... </span>
                        <span
                          onClick={() =>
                            setShowMoreContent(
                              "comments-block-header-comments-active"
                            )
                          }
                          className="comments-content-show-more"
                        >
                          Xem thêm
                        </span>
                      </>
                    ) : (
                      <></>
                    )}

                    {/* CẦN PHẢI SỬA */}
                  </div>
                  <div>
                    <span className="comment-like">Thích</span>

                    <span className="comment-time">5 giờ</span>
                    {reply.replyUpdateDateTime !== null ? (
                      <>
                        <span className="comment-fix">Đã chỉnh sửa</span>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {replies.length > 1 && showReply === false ? (
          <>
            <div onClick={() => setShowReply(true)} className="show-more-res">
              Xem tất cả <span>{replies.length}</span> phản hồi
            </div>
          </>
        ) : replies.length > 1 && showReply === true ? (
          <>
            {" "}
            <div onClick={() => setShowReply(false)} className="show-more-res">
              <i className="fas fa-window-close"></i> Ẩn phản hồi
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default UserHomeReplies;

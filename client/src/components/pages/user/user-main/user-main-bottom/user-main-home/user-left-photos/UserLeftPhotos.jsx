import axios from "axios";
import React, { useEffect, useState } from "react";

function UserLeftPhotos() {
  // const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  const [posts, setPosts] = useState([]);
  const loadPost = async () => {
    const posts = await axios.get(`http://localhost:5000/api/v1/posts`);
    setPosts(posts.data.data);
  };
  useEffect(() => {
    loadPost();
  }, []);

  return (
    <>
      <div className="user-main-home-left-block">
        <div className="user-main-home-left-block-head">
          <div className="user-main-home-left-block-title">Ảnh</div>
          <div className="user-main-home-left-block-more">Xem tất cả ảnh</div>
        </div>
        <div className="user-main-home-photos">
          {posts !== null ? (
            <>
              {posts.slice(0, 8)?.map((post, i) => {
                <>
                  <div className="user-main-home-photo">
                    <img src={post.postImage} alt="" />
                  </div>
                </>;
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default UserLeftPhotos;

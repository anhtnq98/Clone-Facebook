import React from "react";

function OtherLeftAbout() {
  return (
    <>
      <div className="user-main-home-left-block">
        <div className="user-main-home-left-block-title">Giới thiệu</div>
        <div className="user-main-home-left-block-story">
          Đi xa một hồi rớt mất cái liêm sỉ 😂
        </div>
        {/* LEFT-BLOCK-BUTTON */}
        <div className="user-main-home-left-block-button">
          Chỉnh sửa tiểu sử
        </div>
        {/* LEFT-BLOCK-BUTTON END*/}
        {/* BLOCK OTHER */}
        <div
          style={{ paddingTop: "10px" }}
          className="user-main-home-left-block-other"
        >
          <div className="user-main-home-left-block-small-other">
            <i className="fas fa-graduation-cap"></i>{" "}
            <span>
              Từng học tại{" "}
              <a href="https://www.facebook.com/cbcjapanese">
                外語ビジネス専門学校
                日本語学科・日本語研究科・ビジネス日本語学科
              </a>
            </span>
          </div>
        </div>
        {/* BLOCK OTHER END */}
        {/* BLOCK OTHER */}
        <div className="user-main-home-left-block-other">
          <div className="user-main-home-left-block-small-other">
            <i className="fas fa-home"></i>{" "}
            <span>
              Sống tại{" "}
              <a href="https://www.facebook.com/places/Hoat-dong-giai-tri-tai-Yokohama/105589566142652/">
                Yokohama
              </a>
            </span>
          </div>
        </div>
        {/* BLOCK OTHER END */}
        {/* BLOCK OTHER */}
        <div className="user-main-home-left-block-other">
          <div className="user-main-home-left-block-small-other">
            <i className="fas fa-wifi"></i>
            <span>
              Có <a href="/user-main-page/friends">313 người</a> theo dõi
            </span>
          </div>
        </div>
        {/* BLOCK OTHER END */}
        {/* LEFT-BLOCK-BUTTON */}
        <div className="user-main-home-left-block-button">
          Chỉnh sửa chi tiết
        </div>
        {/* LEFT-BLOCK-BUTTON END*/}
        {/* LEFT-BLOCK-BUTTON */}
        <div className="user-main-home-left-block-button">Thêm sở thích</div>
        {/* LEFT-BLOCK-BUTTON END*/}
        {/* LEFT-BLOCK-BUTTON */}
        <div className="user-main-home-left-block-memory">
          <img
            src="https://life.thanhcong.vn/wp-content/uploads/2023/01/con-vat-yeu-thich-con-meo.jpg"
            alt=""
          />
        </div>
        <div className="user-main-home-left-block-button">
          Chỉnh sửa phần Đáng chú ý
        </div>
        {/* LEFT-BLOCK-BUTTON END*/}
      </div>
    </>
  );
}

export default OtherLeftAbout;

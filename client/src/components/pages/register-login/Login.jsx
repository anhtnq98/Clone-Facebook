import React, { useState } from "react";
import "./Login.css";
import LoginFooter from "./login-footer/LoginFooter";
import Modal from "react-bootstrap/Modal";

function Login() {
  //  Ngày sinh
  const dayOfBirth = [];
  for (var i = 1; i <= 31; i++) {
    dayOfBirth.push(i);
  }
  // Tháng sinh
  const monthOfBirth = [];
  for (var j = 1; j <= 12; j++) {
    monthOfBirth.push(j);
  }
  // Năm sinh
  const yearOfBirth = [];
  const currentYear = new Date().getFullYear();
  for (var k = currentYear; k >= 1905; k--) {
    yearOfBirth.push(k);
  }

  // Ẩn hiện đăng ký
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  //Radio
  const [radioValue, setRadiovalue] = useState("");
  const changeSelection = (e) => {
    setRadiovalue(e.target.value);
  };
  return (
    <>
      <div className="login-body">
        {/* LOGIN RECENTLY */}
        <div className="login-recently">
          <div className="login-recently-block">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt=""
            />
            <div className="login-recently-block-text">Đăng nhập gần đây</div>
            <div className="login-recently-block-text2">
              Nhấp vào ảnh của bạn hoặc thêm tài khoản.
            </div>
          </div>
          <div className="login-recently-choices">
            <div className="login-recently-choices-block">
              <div className="choices-block-img">
                <img
                  src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                  alt=""
                />
              </div>
              <div className="choices-block-name">Thân Ngọc</div>
            </div>
            <div className="login-recently-choices-block-add">
              <div className="choices-block-img">
                <i class="fa-solid fa-circle-plus"></i>
              </div>
              <div className="choices-block-title">Thêm tài khoản </div>
            </div>
          </div>
        </div>
        {/* LOGIN RECENTLY END*/}
        <div className="login-main">
          <div className="login-input-container">
            <div>
              <input type="text" placeholder="Email hoặc số điện thoại" />
            </div>
            <div>
              <input type="password" placeholder="Mật khẩu" />
            </div>
            <div className="login-button">Đăng nhập</div>
            <div className="forgot-password">Quên mật khẩu?</div>
            <hr />
            <div onClick={handleShowRegister} className="to-register-button">
              Tạo tài khoản mới
            </div>
          </div>
          <div className="login-create-page">
            <span>Tạo Trang</span> dành cho người nổi tiếng, thương hiệu hoặc
            doanh nghiệp.
          </div>
        </div>
      </div>
      {/* REGISTER */}
      <Modal
        className="register-container"
        show={showRegister}
        onHide={handleCloseRegister}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="register-title">Đăng ký</div>
            <div className="register-sub-title">Nhanh chóng và dễ dàng.</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register-input-container">
            <div className="register-input-name">
              <input type="text" placeholder="Họ" />
              <input type="text" placeholder="Tên" />
            </div>
            <div className="register-input-phone">
              <input type="text" placeholder="Số di động hoặc email" />
            </div>
            <div className="register-input-password">
              <input type="text" placeholder="Mật khẩu mới" />
            </div>

            <div>
              <div className="select-title">Sinh nhật</div>
              <div className="register-input-birthday">
                <select name="" id="">
                  {dayOfBirth?.map((day) => (
                    <>
                      <option value={day}>{day}</option>
                    </>
                  ))}
                </select>
                <select name="" id="">
                  {monthOfBirth?.map((month) => (
                    <>
                      <option value={`Tháng ${month}`}>Tháng {month}</option>
                    </>
                  ))}
                </select>
                <select name="yearOfBirth" id="">
                  {yearOfBirth?.map((year) => (
                    <>
                      <option value={year}>{year}</option>
                    </>
                  ))}
                </select>
              </div>

              <div style={{ marginTop: "5px" }}>
                <div className="select-title">Giới tính</div>
                <div className="register-input-gender">
                  <div>
                    Nữ{" "}
                    <input
                      type="radio"
                      name="radioValue"
                      value={"Nữ"}
                      onChange={changeSelection}
                      checked={radioValue === "Nữ"}
                      id=""
                    />
                  </div>
                  <div>
                    Nam{" "}
                    <input
                      type="radio"
                      name="radioValue"
                      value={"Nam"}
                      checked={radioValue === "Nam"}
                      onChange={changeSelection}
                      id=""
                    />
                  </div>
                  <div>
                    Tùy chỉnh{" "}
                    <input
                      type="radio"
                      name="radioValue"
                      value={"Tùy chỉnh"}
                      checked={radioValue === "Tùy chỉnh"}
                      onChange={changeSelection}
                      id=""
                    />
                  </div>
                </div>
              </div>

              <div className="register-footer-one">
                Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin
                liên hệ của bạn lên Facebook.{" "}
                <a href="https://www.facebook.com/help/637205020878504">
                  Tìm hiểu thêm
                </a>
                .
              </div>

              <div className="register-footer-two">
                Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
                <a href="https://www.facebook.com/legal/terms/update">
                  Điều khoản
                </a>
                ,{" "}
                <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">
                  Chính sách quyền riêng tư
                </a>{" "}
                và{" "}
                <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">
                  Chính sách cookie
                </a>{" "}
                của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua
                SMS và hủy nhận bất kỳ lúc nào.
              </div>

              <div className="register-button">Đăng ký</div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* REGISTER END*/}
      <LoginFooter />
    </>
  );
}

export default Login;

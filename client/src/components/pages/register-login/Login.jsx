import React, { useEffect, useState } from "react";
import "./Login.css";
import LoginFooter from "./login-footer/LoginFooter";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));
  const navigate = useNavigate();

  // Lấy dữ liệu từ users
  const [data, setData] = useState([]);
  const loadData = async () => {
    const result = await axios.get("http://localhost:5000/api/v1/users");
    setData(result.data.data);
  };
  useEffect(() => {
    loadData();
  }, []);

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

  // Ẩn hiện đăng nhập
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const userId = uuidv4();
  // value
  const [inputValue, setInputValue] = useState({
    userId: userId,
    firstName: "",
    surName: "",
    email: "",
    password: "",
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
    avatarDefault:
      "https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-avatar%2Fdefaul%20avatar.jpg?alt=media&token=3fe4e2c3-0631-4f66-9ab2-bb7e34fda2aa",
    backgroundDefault:
      "https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-avatar%2Fdefaul%20background.jpg?alt=media&token=1d9a4170-556d-416a-8665-c1f06565624c",
  });

  const handleChange = (e) => {
    const newValue = { ...inputValue, [e.target.name]: e.target.value };
    setInputValue(newValue);
  };

  //Radio Value
  const [radioValue, setRadiovalue] = useState("");
  const changeSelection = (e) => {
    setRadiovalue(e.target.value);
    const addValue = { ...inputValue, gender: e.target.value };
    setInputValue(addValue);
  };

  const validateEmail = (email) => {
    const checkMail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (checkMail.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handleRegister = async () => {
    if (
      !inputValue.firstName ||
      !inputValue.surName ||
      !inputValue.email ||
      !inputValue.password ||
      !inputValue.dayOfBirth ||
      !inputValue.monthOfBirth ||
      !inputValue.yearOfBirth ||
      !inputValue.gender
    ) {
      toast.warning("Thông tin không được để trống", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    } else if (!validateEmail(inputValue.email)) {
      toast.warning("Email định dạng không đúng", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    } else if (inputValue.password.length < 8) {
      toast.warning("Mật khẩu không được nhỏ hơn 8 kí tự", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].email === inputValue.email) {
        toast.error("Email đã được sử dụng", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        return;
      }
    }

    toast.success("Đăng ký thành công!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    await axios.post("http://localhost:5000/api/v1/register", inputValue);
    setShowRegister(false);
    setInputValue({
      userId: userId,
      firstName: "",
      surName: "",
      email: "",
      password: "",
      dayOfBirth: "",
      monthOfBirth: "",
      yearOfBirth: "",
      avatarDefault:
        "https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-avatar%2Fdefaul%20avatar.jpg?alt=media&token=3fe4e2c3-0631-4f66-9ab2-bb7e34fda2aa",
      backgroundDefault:
        "https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/facebook-avatar%2Fdefaul%20background.jpg?alt=media&token=1d9a4170-556d-416a-8665-c1f06565624c",
    });
  };

  // Đăng nhập
  const [inputLoginValue, setInputLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleInputLoginChange = (e) => {
    const newLoginValue = {
      ...inputLoginValue,
      [e.target.name]: e.target.value,
    };
    setInputLoginValue(newLoginValue);
  };

  const handleLogin = async () => {
    if (!inputLoginValue.email || !inputLoginValue.password) {
      toast.warning("Thông tin không được để trống", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }
    await axios
      .post("http://localhost:5000/api/v1/login", {
        email: inputLoginValue.email,
        password: inputLoginValue.password,
      })
      .then((response) => {
        // const { token, data } = response.data.data;
        localStorage.setItem("loginFlag", JSON.stringify(response.data.data));
        localStorage.setItem(
          "saveFlag",
          JSON.stringify({
            userId: response.data.data.userId,
            firstName: response.data.data.firstName,
            surName: response.data.data.surName,
            avatarDefault: response.data.data.surName,
          })
        );
        toast.success("Đăng nhập thành công!", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        setTimeout(() => {
          navigate(`/user-main-page/`);
        }, 2500);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          toast.error("Email hoặc mật khẩu không tồn tại", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
          return;
        } else if (error.response.status === 400) {
          toast.error("Email hoặc mật khẩu không tồn tại", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
          return;
        } else {
          toast.warning("Đăng nhập thất bại", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
          return;
        }
      });
  };

  // Xóa tài khoản đăng nhập gần đây
  const handleDeleteLoginAccount = () => {
    localStorage.removeItem("saveFlag");
    navigate("/");
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
            {/* LOGIN RECENTLY BLOCK APPEAR */}
            {saveFlag !== null ? (
              <>
                <div className="login-recently-choices-block">
                  <div className="choices-block-img">
                    <img
                      src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/165567076_2820496928261214_5651026651800192589_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=utqwnKmLXmEAX9UbbtW&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBrsybjkQQcFxw1vDog4eKdH3JDCGEPuTaj-TlTVsDjCg&oe=64951D4E"
                      alt=""
                    />
                  </div>
                  <div className="choices-block-name">Thân Ngọc</div>
                  <div
                    onClick={handleDeleteLoginAccount}
                    className="login-recently-choices-block-delete"
                  >
                    <i class="fas fa-times-circle"></i>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {/* LOGIN RECENTLY BLOCK APPEAR END*/}
            <div
              onClick={handleShowLogin}
              className="login-recently-choices-block-add"
            >
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
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleInputLoginChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                onChange={handleInputLoginChange}
              />
            </div>
            <div className="login-button" onClick={handleLogin}>
              Đăng nhập
            </div>
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
              <input
                name="surName"
                type="text"
                placeholder="Họ"
                onChange={handleChange}
                value={inputValue.surName}
              />
              <input
                name="firstName"
                type="text"
                placeholder="Tên"
                onChange={handleChange}
                value={inputValue.firstName}
              />
            </div>
            <div className="register-input-phone">
              <input
                name="email"
                type="text"
                placeholder="Email"
                onChange={handleChange}
                value={inputValue.email}
              />
            </div>
            <div className="register-input-password">
              <input
                name="password"
                type="text"
                placeholder="Mật khẩu mới"
                onChange={handleChange}
                value={inputValue.password}
              />
            </div>

            <div>
              <div className="select-title">Sinh nhật</div>
              <div className="register-input-birthday">
                <select
                  name="dayOfBirth"
                  value={inputValue.dayOfBirth}
                  onChange={handleChange}
                  id=""
                >
                  {dayOfBirth?.map((day, dIndex) => (
                    <>
                      <option key={dIndex} value={day}>
                        {day}
                      </option>
                    </>
                  ))}
                </select>
                <select
                  name="monthOfBirth"
                  id=""
                  value={inputValue.monthOfBirth}
                  onChange={handleChange}
                >
                  {monthOfBirth?.map((month, mIndex) => (
                    <>
                      <option key={mIndex} value={month}>
                        Tháng {month}
                      </option>
                    </>
                  ))}
                </select>
                <select
                  name="yearOfBirth"
                  value={inputValue.yearOfBirth}
                  onChange={handleChange}
                  id=""
                >
                  {yearOfBirth?.map((year, yIndex) => (
                    <>
                      <option key={yIndex} value={year}>
                        {year}
                      </option>
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

              <div onClick={handleRegister} className="register-button">
                Đăng ký
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* REGISTER END*/}

      {/* LOGIN */}
      <Modal
        className="register-container"
        show={showLogin}
        onHide={handleCloseLogin}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="register-title">Đăng nhập Facebook</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login-input-container-modal">
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleInputLoginChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                onChange={handleInputLoginChange}
              />
            </div>
            <div className="login-button" onClick={handleLogin}>
              Đăng nhập
            </div>
            <div className="forgot-password">Quên mật khẩu?</div>
          </div>
        </Modal.Body>
      </Modal>
      {/* LOGIN END*/}
      <LoginFooter />
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default Login;

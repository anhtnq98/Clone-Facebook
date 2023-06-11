const express = require("express");
const server = express();
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./utils/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

// ROUTES
const usersRoutes = require(`./routes/users.routes`);

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
// parse application/jsonnpm
server.use(bodyParser.json());
server.use(cors());
server.use(express.static("public"));

// users route
server.use(`/api/v1/users`, usersRoutes);

// register
server.post("/api/v1/register", (req, res) => {
  const {
    firstName,
    surName,
    email,
    password,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
    gender,
  } = req.body;
  const userId = uuidv4();
  const avatarDefault =
    "https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/users%2FDefault%2Fdefaul%20avatar.jpg?alt=media&token=b0ddbdef-604a-4c4e-9155-0e31cf8c1d91";
  const backgroundDefault =
    "https://firebasestorage.googleapis.com/v0/b/facebook-clone-1e97f.appspot.com/o/users%2FDefault%2Fdefault%20bg.webp?alt=media&token=edd51898-734d-42b2-ae02-951c5644093c";
  // Mã hóa mật khẩu

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      // đối tượng user mới
      const newUser = [
        userId,
        firstName,
        surName,
        email,
        hash,
        dayOfBirth,
        monthOfBirth,
        yearOfBirth,
        gender,
        avatarDefault,
        backgroundDefault,
      ];

      // Câu lệnh query
      const query = `INSERT INTO users(userId, firstName, surName, email, password, dayOfBirth, monthOfBirth, yearOfBirth, gender, avatarDefault, backgroundDefault) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?);
        `;
      // Kêt nối
      connection.query(query, newUser, (err) => {
        if (err) {
          res.status(500).json({
            status: 500,
            message: err,
          });
        } else {
          return res.status(200).json({
            status: 200,
            message: "Thêm mới người dùng thành công",
          });
        }
      });
    }
  });
});

// API đăng nhập
server.post("/api/v1/login", (req, res) => {
  const { email, password } = req.body;
  // Lấy dữ liệu từ database
  const query = "SELECT * FROM users WHERE email = ?";
  connection.query(query, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      // Kiểm tra kết quả
      if (result.length == 0) {
        return res.status(400).json({
          message: "Email hoặc mật khẩu không đúng",
        });
      } else {
        // Nếu như có tồn tại email
        const user = result[0];
        // So sánh mật khẩu từ client với server
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              status: 500,
              message: err,
            });
          } else {
            if (!isMatch) {
              return res.status(400).json({
                message: "Email hoặc mật khẩu không đúng",
              });
            } else {
              // Tạo ra một chuỗi token
              const token = jwt.sign({ id: user.userId }, process.env.SECRET, {
                expiresIn: "1h",
              });
              return res.status(200).json({
                status: 200,
                message: "Đăng nhập thành công",
                data: user,
                token: token,
              });
            }
          }
        });
      }
    }
  });
});

server.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

server.listen(port, (req, res) => {
  console.log(`The server is running on port http://localhost:${port}`);
});

const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi
  const queryString = "SELECT * FROM users";

  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        results: result.length,
        data: result,
      });
    }
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi
  const queryString = `SELECT * FROM users WHERE userId = "${id}"`;

  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        results: result.length,
        data: result,
      });
    }
  });
});

router.get("/friend/hint/:id", (req, res) => {
  const { id } = req.params;
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi
  const queryString = `SELECT * FROM users WHERE userId = "${id}"`;

  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        results: result.length,
        data: result,
      });
    }
  });
});

router.get("/friends/:id", (req, res) => {
  const { id } = req.params;
  // Câu lệnh truy vấn lấy thông tin bạn bè
  const queryString = `SELECT 
  f.friendShipId,
  f.friendOne,
  f.friendTwo,
  f.friendStatus,
  f.followStatus,
  f.relationship,
  u.firstName,
  u.surName,
  u.avatarDefault
FROM
  friendship AS f
      JOIN
  users AS u ON f.friendTwo = u.userId
WHERE
  friendOne = '${id}' AND friendStatus = 2
`;

  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        results: result.length,
        data: result,
      });
    }
  });
});

router.get("/check-same-friends/:id", (req, res) => {
  const { id } = req.params;
  // Câu lệnh truy vấn lấy thông tin bạn bè
  const queryString = `SELECT 
  f.friendShipId,
  f.friendOne,
  f.friendTwo
FROM
  friendship AS f
      JOIN
  users AS u ON f.friendTwo = u.userId
WHERE
  friendOne = '${id}' AND friendStatus = 2
`;

  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        results: result.length,
        data: result,
      });
    }
  });
});

router.put("/upload-background/:id", (req, res) => {
  const { id } = req.params;
  const { backgroundDefault } = req.body;
  const query = `UPDATE users SET backgroundDefault = ? WHERE userId = "${id}"`;
  connection.query(query, backgroundDefault, (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Đổi ảnh nền thành công",
      });
    }
  });
});

router.put("/upload-avatar/:id", (req, res) => {
  console.log("running 66 =====>");
  const { id } = req.params;
  const { avatarDefault } = req.body;
  const query = `UPDATE users SET avatarDefault = ? WHERE userId = "${id}"`;
  connection.query(query, avatarDefault, (err) => {
    console.log("running 71 =====>");
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Đổi ảnh đại diện thành công",
      });
    }
  });
});

router.get("/friendship", (req, res) => {
  const { id } = req.params;
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi
  const queryString = `SELECT * FROM friendship WHERE friendShipId = "${id}"`;

  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Failed",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "OK",
        results: result.length,
        data: result,
      });
    }
  });
});

module.exports = router;

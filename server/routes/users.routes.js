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
  friendOne = '${id}'
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

router.get("/friend/search-user", (req, res) => {
  const { searchValue } = req.query;

  console.log(req);
  console.log(req.params, " goin to like 137");
  // Câu lệnh truy vấn lấy thông tin bạn bè

  const queryString = `
    SELECT *
    FROM users
    WHERE firstName LIKE '%${searchValue}%'
      OR surName LIKE '%${searchValue}%'
  `;

  connection.query(queryString, (err, result) => {
    console.log("vao");
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

router.post("/add-friend", (req, res) => {
  const { friendOne, friendTwo, friendStatus, followStatus, relationship } =
    req.body;

  const newFriend = [
    friendOne,
    friendTwo,
    friendStatus,
    followStatus,
    relationship,
  ];

  const queryString = `INSERT INTO friendship (friendOne, friendTwo, friendStatus, followStatus, relationship)
  VALUES (?, ?, ?, ?, ?);
`;

  connection.query(queryString, newFriend, (err) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        error: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Xin kết bạn thành công",
      });
    }
  });
});

router.post("/add-friend-disappear", (req, res) => {
  const { friendOne, friendTwo, friendStatus, followStatus, relationship } =
    req.body;

  const noThanks = [
    friendOne,
    friendTwo,
    friendStatus,
    followStatus,
    relationship,
  ];

  const queryString = `INSERT INTO friendship (friendOne, friendTwo, friendStatus, followStatus, relationship)
VALUES (?, ?, ?, ?, ?);
`;

  connection.query(queryString, noThanks, (err) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        error: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Xóa kết bạn thành công",
      });
    }
  });
});

router.put("/add-friend-confirm", (req, res) => {
  const { friendOne, friendTwo } = req.body;
  const values = [friendOne, friendTwo];
  const queryString = `UPDATE friendship SET friendStatus = 2,  followStatus = 1, relationship = 1 
  WHERE friendOne = ? 
  ANd friendTwo = ? `;
  connection.query(queryString, values, (err) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        error: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Kết bạn thành công",
      });
    }
  });
});

router.put("/add-friend-cancel", (req, res) => {
  const { friendOne, friendTwo } = req.body;
  const values = [friendOne, friendTwo];
  const queryString = `DELETE FROM friendship
  WHERE friendOne = ?
  AND friendTwo = ? 
 `;
  connection.query(queryString, values, (err) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        error: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Hủy kết bạn thành công",
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

module.exports = router;

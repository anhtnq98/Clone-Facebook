const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi của stories
  const queryString = ` SELECT    
    s.storyId,
    s.storyImage,
    s.author,
    u.avatarDefault,
    u.firstName,
    u.surName
  FROM
    stories AS s
        JOIN
    users AS u ON s.author = u.userId `;

  connection.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "Kết nối thất bại",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "Thành công",
        results: result.length,
        data: result,
      });
    }
  });
});

router.post("/", (req, res) => {
  const { author, storyImage } = req.body;

  const newStory = [author, storyImage];

  // Câu lệnh query
  const query = `INSERT INTO stories(author, storyImage) VALUES (?,?);`;
  // Kêt nối
  connection.query(query, newStory, (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Thêm story mới thành công",
      });
    }
  });
});

module.exports = router;

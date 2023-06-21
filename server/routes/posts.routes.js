const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  // Câu lệnh truy vấn lấy thông tin tất cả bản ghi của bài post
  const queryString = ` SELECT    
  p.postId,
  p.author,
  p.postImage,
  p.postContent,
  p.postStatus,
  p.createDateTime,
  p.updateDateTime,
  p.friendTag,
  p.shareQuantity,
  p.userPage,
  u.avatarDefault,
  u.firstName,
  u.surName
FROM
  posts AS p
      JOIN
  users AS u ON p.author = u.userId `;

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

router.get("/:id", (req, res) => {
  // Câu lệnh truy vấn lấy thông tin của bài post theo tác giả để hiển thị trang
  const { id } = req.params;
  const queryString = `SELECT 
    p.postId,
    p.author,
    p.postImage,
    p.postContent,
    p.postStatus,
    p.createDateTime,
    p.updateDateTime,
    p.friendTag,
    p.shareQuantity,
    p.userPage,
    u.avatarDefault,
    u.firstName,
    u.surName
FROM
    posts AS p
        JOIN
    users AS u ON p.author = u.userId
WHERE
userPage = '${id}'
  `;

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

router.get("/react-comment/react/:postId", (req, res) => {
  // Câu lệnh truy vấn lấy thông tin của react bài post theo postId
  const { postId } = req.params;
  const queryString = `SELECT 
  r.reactId,
  r.react,
  r.author,
  r.postId,
  r.reactText,
  r.reactStyle,
  u.firstName,
  u.surName,
  u.avatarDefault
FROM
  reacts AS r
      JOIN
  users AS u ON r.author = u.userId where postId=${postId}`;
  connection.query(queryString, (err, result) => {
    if (err) {
      console.log(err);
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

router.get("/react-comment/comment/:postId", (req, res) => {
  // Câu lệnh truy vấn lấy thông tin của comment bài post theo postId
  const { postId } = req.params;
  const queryString = `SELECT 
    c.commentId,
    c.commentContent,
    c.commentLike,
    c.commentCreateDateTime,
    c.commentUpdateDateTime,
    c.userId,
    c.postId,
    u.firstName,
    u.surName,
    u.avatarDefault
FROM
    comments AS c
        JOIN
    users AS u ON c.userId = u.userId where postId=${postId}`;
  connection.query(queryString, (err, result) => {
    if (err) {
      console.log(err);
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

router.get("/react-comment/comment/replies/:commentId", (req, res) => {
  // Câu lệnh truy vấn lấy thông tin của comment bài post theo postId
  const { commentId } = req.params;
  const queryString = `SELECT 
  r.replyId,
  r.replyContent,
  r.replyLike,
  r.replyCreateDateTime,
  r.replyUpdateDateTime,
  r.userId,
  r.commentId,
  u.firstName,
  u.surName,
  u.avatarDefault
FROM
    replies AS r
    JOIN
    users AS u ON r.userId = u.userId where commentId = ${commentId}`;
  connection.query(queryString, (err, result) => {
    if (err) {
      console.log(err);
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
  const {
    author,
    postImage,
    postContent,
    postStatus,
    createDateTime,
    updateDateTime,
    friendTag,
    userPage,
  } = req.body;

  const newPost = [
    author,
    postImage,
    postContent,
    postStatus,
    createDateTime,
    updateDateTime,
    friendTag,
    userPage,
  ];

  // Câu lệnh query
  const query = `INSERT INTO posts(
        author,
        postImage,
        postContent,
        postStatus,
        createDateTime,
        updateDateTime,
        friendTag,
        userPage
        ) 
        VALUES (?,?,?,?,?,?,?,?);
        `;
  // Kêt nối
  connection.query(query, newPost, (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Thêm bài viết mới thành công",
      });
    }
  });
});

router.patch("/:id", (req, res) => {
  const { postImage, postContent, postStatus, createDateTime } = req.body;

  const newPost = [postImage, postContent, postStatus, createDateTime];

  // Câu lệnh query
  const query = `UPDATE posts SET
        postImage = ?,
        postContent = ?,
        postStatus = ?,
        createDateTime = ?
        WHERE postId = ${id}
        `;
  // Kêt nối
  connection.query(query, newPost, (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Cập nhật bài viết mới thành công",
      });
    }
  });
});

// Xóa post
router.put("/:id", (req, res) => {
  // Câu lệnh query
  const { id } = req.params;
  const query = `DELETE FROM posts WHERE postId = ${id}
        `;
  // Kêt nối
  connection.query(query, (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Xóa bài viết thành công",
      });
    }
  });
});

router.post("/react-comment/comment", (req, res) => {
  const {
    commentContent,
    commentLike,
    commentCreateDateTime,
    commentUpdateDateTime,
    userId,
    postId,
  } = req.body;

  const newComment = [
    commentContent,
    commentLike,
    commentCreateDateTime,
    commentUpdateDateTime,
    userId,
    postId,
  ];

  // Câu lệnh query
  const query = `INSERT INTO comments(
    commentContent,
    commentLike,
    commentCreateDateTime,
    commentUpdateDateTime,
    userId,
    postId
        ) 
        VALUES (?,?,?,?,?,?);
        `;
  // Kêt nối
  connection.query(query, newComment, (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Thêm bình luận mới thành công",
      });
    }
  });
});

router.post("/react-comment/react", (req, res) => {
  const { react, author, postId, reactText, reactStyle } = req.body;

  const newReact = [react, author, postId, reactText, reactStyle];

  // Câu lệnh query
  const query = `INSERT INTO reacts(
          react,
          author,
          postId,
          reactText,
          reactStyle
        ) 
        VALUES (?,?,?,?,?);
        `;
  // Kêt nối
  connection.query(query, newReact, (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "React thành công",
      });
    }
  });
});

router.put("/react-comment/react/:id", (req, res) => {
  const { id } = req.params;
  const { react, reactText, reactStyle } = req.body;
  const values = [react, reactText, reactStyle];
  console.log(react, id, "line react");
  // Câu lệnh query
  const query = `UPDATE reacts SET react = ?, reactText = ?, reactStyle = ? WHERE reactId = ${id} `;
  // Kêt nối
  connection.query(query, values, (err) => {
    if (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Thay đổi react thành công",
      });
    }
  });
});

module.exports = router;

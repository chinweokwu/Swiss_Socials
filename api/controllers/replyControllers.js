import {db} from "../connection.js";
import Jwt from "jsonwebtoken";
import moment from "moment";

export const getReplies = (req,res) => {
  const q = `SELECT r.*, u.id AS replyUserId, username, profilePic FROM postCommentReply AS r JOIN user AS u ON (u.id = r.replyUserId)
    WHERE r.postCommentReplyId = ? AND r.commentReplyId = ? ORDER BY r.createdAt DESC`;
  
  db.query(q, [req.query.postCommentReplyId, req.query.commentReplyId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
}

export const addReply = (req,res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json("Not Logged in!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if(err) return res.status(403).json("Token is not valid");

    const q = "INSERT INTO postComment (`replyUserId`,`commentReplyId`,`postCommentReplyId`, `desc`,`img`,`createdAt`) VALUES (?)";
  
    const values = [
      userInfo.id,
      req.body.commentReplyId,
      req.body.postCommentReplyId,
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Reply has been created");
    });
  });
};

export const deleteReply = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const commentId = req.params.id;
    const q = "DELETE FROM postCommentReply WHERE `id` = ? AND `replyUserId` = ?";

    db.query(q, [commentId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0) return res.json("Reply has been deleted!");
      return res.status(403).json("You can delete only your Reply!");
    });
  });
};

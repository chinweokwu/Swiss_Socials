import {db} from "../connection.js";
import Jwt from "jsonwebtoken";
import moment from "moment";

export const getComments = (req,res) => {
  const q = `SELECT c.*, u.id AS commentUserId, username, profilePic FROM postComment AS c JOIN user AS u ON (u.id = c.commentUserId)
    WHERE c.postId = ? ORDER BY c.createdAt DESC`;
  
  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });

}

export const addComment = (req,res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json("Not Logged in!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if(err) return res.status(403).json("Token is not valid");

    const q = "INSERT INTO postComment (`commentUserId`,`desc`,`postId`,`img`,`createdAt`) VALUES (?)";
  
    const values = [
      userInfo.id,
      req.body.desc,
      req.body.postId,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Comment has been created");
    });
  })
};

export const deleteComment = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const commentId = req.params.id;
    const q = "DELETE FROM postComment WHERE `id` = ? AND `commentUserId` = ?";

    db.query(q, [commentId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0) return res.json("Comment has been deleted!");
      return res.status(403).json("You can delete only your comment!");
    });
  });
};

export const updateComment = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const commentId = req.params.id;
    const q = "UPDATE postComment SET `desc` = ?, `img` = ? WHERE `id` = ? AND `commentUserId` = ?";
    const values = [
      userInfo.id,
      req.body.desc,
      req.body.postId,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ];

    db.query(q, [userInfo.id, req.body.desc, req.body.postId, req.body.img], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0) return res.json("Comment has been updated!");
      return res.status(403).json("You can update only your comment!");
    });
  });
};
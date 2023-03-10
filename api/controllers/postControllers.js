import {db} from "../connection.js";
import Jwt from "jsonwebtoken";
import moment from "moment";

export const getPosts = async (req, res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json("Not Logged in!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if(err) return res.status(403).json("Token is not valid");

  const q = `SELECT p.*, u.id AS postUserId, username, profilePic FROM post AS p JOIN user AS u ON (u.id = p.postUserId)
  LEFT JOIN relationship AS r ON (p.postUserId = r.fellowedUserId) WHERE r.followerUserId= ? OR p.postUserId =?
  ORDER BY p.createdAt DESC`;
  
  db.query(q, [userInfo.id, userInfo.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
  })
};

export const createPost = (req,res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json("Not Logged in!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if(err) return res.status(403).json("Token is not valid");

    const q = "INSERT INTO post (`postUserId`,`title`,`desc`,`img`,`createdAt`) VALUES (?)";
  
    const values = [
      userInfo.id,
      req.body.title,
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created");
    });
  })
}

export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "DELETE FROM post WHERE `id`=? AND `postUserId` = ?";

    db.query(q, [req.params.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if(data.affectedRows>0) return res.status(200).json("Post has been deleted.");
      return res.status(403).json("You can delete only your post")
    });
  });
};


export const updatePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "UPDATE post SET title=?, desc=?, img=? WHERE `id`=? AND `postUserId`=?";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.params.id,
      userInfo.id,
    ];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      if(data.affectedRows>0) return res.status(200).json("Post has been updated");
      return res.status(403).json("You can update only your post");
    });
  });
};


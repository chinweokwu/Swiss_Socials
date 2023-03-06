import {db} from "../connection.js";
import Jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
  const q= "SELECT likeUserId FROM postLike WHERE likePostId = ?";
  db.query(q, [req.query.likePostId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map(like => like.likeUserId));
  });
};

export const addLike = (req, res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json("Not Logged in!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if(err) return res.status(403).json("Token is not valid");

    const q = "INSERT INTO postLike (`likeUserId`,`likePostId`) VALUES (?)";
  
    const values = [
      userInfo.id,
      req.body.likePostId
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("post has been liked");
    });
  })
};

export const removeLike = (req, res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).json("Not Logged in!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if(err) return res.status(403).json("Token is not valid");

    const q = "DELETE FROM postLike WHERE `likeUserId` = ? AND `likePostId` = ?";

    db.query(q, [userInfo.id, req.query.likePostId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("post has been disliked ");
    });
  })
};
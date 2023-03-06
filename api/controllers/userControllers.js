import { db } from "../connection.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM user WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "UPDATE user SET `firstName`=?,`lastName`=?,`username`=?,`profilePic`=?,`coverPic`=?, `location`=?, `languages`=?, `mobile`=?, `about`=?, `websites`=?, WHERE id=? ";

    db.query(
      q,
      [
        userInfo.id,
        req.body.firstName,
        req.body.lastName,
        req.body.username,
        req.body.profilePic,
        req.body.coverPic,
        req.body.location,
        req.body.languages,
        req.body.mobile,
        req.body.about,
        req.body.websites,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Updated!");
        return res.status(403).json("You can update only your post!");
      }
    );
  });
};

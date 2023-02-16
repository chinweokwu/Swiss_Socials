import { db } from "../connection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export const register = (req, res) => {
  const q = "SELECT * FROM user WHERE username = ?";
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array().map((err) => err.msg) );
  }

  db.query(q, [req.body.username], (err,data) => {
    if(err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists");

    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const q = "INSERT INTO user (`email`,`username`, `firstName`,`lastName`,`password`) VALUE (?)";
    const values  = [req.body.email, req.body.username, req.body.firstName, req.body.lastName, hashedPassword];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      const q = "SELECT * FROM user WHERE username = ?";
      db.query(q, [req.body.username], (err, data)=> {
        if(err) return res.status(500).json(err)
        const token = jwt.sign({ id: data[0].id}, "secretkey");
        const  {password, ...others} = data[0]
        res.cookie("accessToken", token, {
          httpOnly: true,
        }).status(200).json(others)
      })
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM user WHERE username = ?";
  const { username, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array().map((err) => err.msg) );
  }


  db.query(q, [username], (err, data)=> {
    if(err) return res.status(500).json(err)
    if(data.length === 0) return res.status(404).json("User not found");

    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)
    
    if(!checkPassword) return res.status(400).json("Wrong password or username!")
    
    const token = jwt.sign({ id: data[0].id}, "secretkey");
    const  {password, ...others} = data[0]

    res.cookie("accessToken", token, {
      httpOnly: true,
    }).status(200).json(others)
  })
};

export const logout = (req, res) => {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none"
  }).status(200).json("User has been logged out")
};
import { pool } from "../db.js";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import myConnection from "express-myconnection";
import { estilos } from "../css.js";

export const getRegister = async (req, res) => {
  res.render("register", { error: false });
};

export const postRegister = async (req, res) => {
  const data = req.body;

  //console.log(data.password);

  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM users WHERE email = ?",
      [data.email],
      (err, userdata) => {
        if (userdata.length > 0) {
          res.render("register", {
            headtitle: "registrar usuario",
            error: "este usuario ya existe",
          });
        } else {
          req.getConnection((err, conn) => {
            conn.query("INSERT INTO users SET ?", [data], (err, rows) => {
              console.log(data.password);
              res.redirect("/login");
            });
          });
        }
      }
    );
  });
};

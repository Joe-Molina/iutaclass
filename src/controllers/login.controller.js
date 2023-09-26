import { pool } from "../db.js";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import myConnection from "express-myconnection";
import session from "express-session";
import { estilos } from "../css.js";

/*

export const getLogin = async (req, res) => {
  if (req.session.loggedin != true) {
    res.render("login", { error: false, headtitle: "Login IUTACLASS" });
  } else {
    res.redirect("/");
  }
};

export const postLogin = async (req, res) => {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM users WHERE email = ?",
      [data.email],
      (err, userdata) => {
        if (userdata.length > 0) {
          const password = data.password;
          const hash = userdata[0].password;

          if (password !== hash) {
            res.render("login", { error: "incorrect password" });
          } else {
            req.session.loggedin = true;
            req.session.user = userdata[0].id;
            req.session.name = userdata[0].name;
            req.session.email = userdata[0].email;
            req.session.userType = userdata[0].tipo_usuario;

            res.redirect("/");
          }
        } else {
          res.render("login", {
            error: "el usuario no existe",
            headtitle: "Login IUTACLASS",
          });
        }
      }
    );
  });
};

export const getLogOut = async (req, res) => {
  if (req.session.loggedin == true) {
    req.session.destroy();
  }
  res.redirect("/login");
};

*/

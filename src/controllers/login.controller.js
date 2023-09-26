import bodyParser from "body-parser";
import session from "express-session";
import { Users } from "../models/Users.model.js";
import { estilos } from "../css.js";

export const getLogin = async (req, res) => {
  if (req.session.loggedin != true) {
    res.render("login", { error: false, headtitle: "Login IUTACLASS" });
  } else {
    res.redirect("/");
  }
};

export const postLogin = async (req, res) => {
  const { email, password } = req.body;

  //buscar por email al usuario con el que quiero entrar
  //si hay un usuario comprar las contrase;as y dar acceso si es correcta
  //guardar las variables de session.

  const user = await Users.findOne({
    where: { email },
  });

  if (user) {
    if (req.body.password === user.password) {
      req.session.loggedin = true;
      req.session.user = user.id;
      req.session.name = user.name;
      req.session.email = user.email;
      req.session.userType = user.tipo_usuario;

      res.json("la contrasena es correcta");
    } else {
      res.json("la contrasema es incorrecta");
    }
  } else {
    res.json("el usuario no existe");
  }

  //   req.getConnection((err, conn) => {
  //     conn.query(
  //       "SELECT * FROM users WHERE email = ?",
  //       [data.email],
  //       (err, userdata) => {
  //         if (userdata.length > 0) {
  //           const password = data.password;
  //           const hash = userdata[0].password;

  //           if (password !== hash) {
  //             res.render("login", { error: "incorrect password" });
  //           } else {
  //             req.session.loggedin = true;
  //             req.session.user = userdata[0].id;
  //             req.session.name = userdata[0].name;
  //             req.session.email = userdata[0].email;
  //             req.session.userType = userdata[0].tipo_usuario;

  //             res.redirect("/");
  //           }
  //         } else {
  //           res.render("login", {
  //             error: "el usuario no existe",
  //             headtitle: "Login IUTACLASS",
  //           });
  //         }
  //       }
  //     );
  //   });
};

export const getLogOut = async (req, res) => {
  if (req.session.loggedin == true) {
    req.session.destroy();
  }
  res.redirect("/login");
};

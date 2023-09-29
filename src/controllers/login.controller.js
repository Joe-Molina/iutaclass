import bodyParser from "body-parser";
import session from "express-session";
import { Users } from "../models/Users.model.js";
import { estilos } from "../css.js";

const csss = [estilos.header, estilos.index, estilos.aulasCard, estilos.footer];

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
      req.session.userType_id = user.userType_id;

      //res.json(req.session);
      if (req.session.userType_id == 1) {
        res.render("estudiantes");
      } else if (req.session.userType_id == 2) {
        res.render("docentes");
      } else if (req.session.userType_id > 2) {
        res.json("logeado como super su");
        //res.render("coordinadorSu");
      }
    } else {
      res.json("la contrasema es incorrecta");
    }
  } else {
    res.json("el usuario no existe");
  }
};

export const getLogOut = async (req, res) => {
  if (req.session.loggedin == true) {
    req.session.destroy();
  }
  res.redirect("/login");
};

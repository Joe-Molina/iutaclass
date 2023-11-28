import bodyParser from "body-parser";
import session from "express-session";
import { Users } from "../models/Users.model.js";
import { Estudiantes } from "../models/Estudiante.model.js";
import { Administradores } from "../models/Administradores.model.js";
import { Docentes } from "../models/Docentes.model.js";
import { estilos } from "../css.js";

const csss = [estilos.header, estilos.index, estilos.aulasCard, estilos.footer];

export const getLogin = async (req, res) => {
  if (req.session.loggedin != true) {
    res.render("login", { error: false, headtitle: "Login IUTACLASS" });
  } else {
    res.redirect("/");
  }
};

export const Logearse = async (req, res) => {
  const { email, password } = req.body;

  //buscar por email al usuario con el que quiero entrar
  //si hay un usuario comprar las contrase;as y dar acceso si es correcta
  //guardar las variables de session.

  const user = await Users.findOne({
    where: { email },
  });

  if (user) {
    if (password === user.password) {
      req.session.loggedin = true;
      req.session.user = user.id;
      req.session.name = user.name;
      req.session.email = user.email;

      const estudiante = await Estudiantes.findOne({
        where: { user_id: req.session.user },
      });

      const docente = await Docentes.findOne({
        where: { user_id: req.session.user },
      });

      const admin = await Administradores.findOne({
        where: { user_id: req.session.user },
      });

      if (estudiante) {
        req.session.estudiante_id = estudiante.id;
        //res.render("estudiantes");
        res.json(req.session);
      } else if (docente) {
        req.session.docente_id = docente.id;
        console.log(req.session.docente_id);
        //res.render("docentes");
        res.json(req.session);
      } else if (admin) {
        req.session.admin_id = admin.id;
        //res.render("coordinadorSu");
        res.json(req.session);
      }
    } else {
      res.json("la contrasema es incorrecta");
    }
  } else {
    res.json("el usuario no existe");
  }
};

export const CerrarSesion = async (req, res) => {
  if (req.session.loggedin == true) {
    req.session.destroy();
  }
  res.redirect("/login");
};

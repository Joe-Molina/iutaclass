import bodyParser from "body-parser";
import session from "express-session";
import myConnection from "express-myconnection";
import { estilos } from "../css.js";

export const getcalificacion = async (req, res) => {
  try {
    if (req.session.loggedin == true) {
      const id = req.session.user;
      const user = req.session.name;
      const email = req.session.email;
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const getAulaUnidades = async (req, res) => {
  try {
    if (req.session.loggedin == true) {
      const id = req.session.user;
      const user = req.session.name;
      const email = req.session.email;
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const getcalificacionMateria = async (req, res) => {
  try {
    if (req.session.loggedin == true) {
      const id = req.session.user;
      const user = req.session.name;
      const email = req.session.email;
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const postcalificacion = (req, res) => {
  try {
    console.log(req.body.calificacion);
    const newCalification = req.body.calificacion;
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

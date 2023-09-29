import bodyParser from "body-parser";
import { estilos } from "../css.js";
import { Users } from "../models/Users.model.js";

export const getRegisterEstudiante = async (req, res) => {
  const userid = req.session.user;
  if (userid > 1) {
    res.json("bievendido al registro de estudiantes");
    //res.render("registerEstudiante", { error: false });
  } else {
    res.json("no puedes ingresar");
    //res.redirect("/login");
  }
};

export const getRegisterDocente = async (req, res) => {
  const userid = req.session.user;
  if (userid > 2) {
    res.json("bievendido al registro de docentes");
    //res.render("registerDocente", { error: false });
  } else {
    res.json("no puedes ingresar");
    //res.redirect("/login");
  }
};

export const getRegisterCoodinador = async (req, res) => {
  const userid = req.session.user;
  if (userid > 3) {
    res.json("bievendido al registro de coordinadores");
    //res.render("registerCoordinador", { error: false });
  } else {
    res.json("no puedes ingresar");
    //res.redirect("/login");
  }
};

export const crearEstudiante = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userType_id = "1";
    const user = await Users.findOne({
      where: { email },
    });
    if (!user) {
      const newUser = await Users.create({
        name,
        email,
        password,
        userType_id,
      });
      res.json("usuario creado");
    } else {
      res.json("usuario ya registrado");
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const crearDocente = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userType_id = "2";
    const user = await Users.findOne({
      where: { email },
    });
    if (!user) {
      const newUser = await Users.create({
        name,
        email,
        password,
        userType_id,
      });
      res.json("usuario creado");
    } else {
      res.json("usuario ya registrado");
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const crearCoordinador = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userType_id = "3";
    const user = await Users.findOne({
      where: { email },
    });
    if (!user) {
      const newUser = await Users.create({
        name,
        email,
        password,
        userType_id,
      });
      res.json("usuario creado");
    } else {
      res.json("usuario ya registrado");
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

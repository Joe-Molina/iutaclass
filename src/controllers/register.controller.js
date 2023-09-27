import bodyParser from "body-parser";
import { estilos } from "../css.js";
import { Users } from "../models/Users.model.js";

export const getRegister = async (req, res) => {
  res.render("register", { error: false });
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

export const crearSU = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userType_id = "4";
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

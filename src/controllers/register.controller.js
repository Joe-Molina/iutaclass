import bodyParser from "body-parser";
import { estilos } from "../css.js";
import { Users } from "../models/Users.model.js";

export const getRegister = async (req, res) => {
  res.render("register", { error: false });
};

const funCrearUsuario = async (tipo) => {
  // buscar el email en la base de datos para ver si existe
  //si existe no permitir crear otro usuario
  //si no existe crearlo
  //redirigir al login
  try {
    const { name, email, password } = req.body;
    const userType_id = tipo;
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

export const crearEstudiante = async (req, res) => {
  funCrearUsuario("1");
};

export const crearDocente = async (req, res) => {
  funCrearUsuario("2");
};

export const crearCoordinador = async (req, res) => {
  funCrearUsuario("3");
};

export const crearSU = async (req, res) => {
  funCrearUsuario("4");
};

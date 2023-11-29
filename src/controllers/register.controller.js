import bodyParser from "body-parser";
import { estilos } from "../css.js";
import { Users } from "../models/Users.model.js";
import { Estudiantes } from "../models/Estudiante.model.js";
import { Docentes } from "../models/Docentes.model.js";
import { Administradores } from "../models/Administradores.model.js";
import { Carreras } from "../models/Carreras.model.js";

export const getRegisterEstudiante = async (req, res) => {
  const carreras = await Carreras.findAll();

  res.render("register/register_estudiante", {
    headtitle: "registar estudiante",
    error: false,
    carreras,
  });
};

export const getRegisterDocente = async (req, res) => {
  res.render("register/register_docente", {
    headtitle: "registar docente",
    error: false,
  });
};

export const getRegisterAdministrador = async (req, res) => {
  res.render("register/register_admin", {
    headtitle: "registar admin",
    error: false,
  });
};

export const crearEstudiante = async (req, res) => {
  try {
    const { name, email, password, nombre, apellido, carrera_id } = req.body;

    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      // si no consigue un usuario con ese correo crea el usuario
      const newUser = await Users.create({
        name,
        email,
        password,
      });

      const newEstudent = await Estudiantes.create({
        nombre,
        apellido,
        user_id: newUser.id,
        carrera_id,
      });

      res.redirect("/login");
    } else {
      res.json("usuario ya registrado");
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const crearDocente = async (req, res) => {
  try {
    const { name, email, password, nombre, apellido } = req.body;
    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      const newUser = await Users.create({
        name,
        email,
        password,
      });

      const newDocente = await Docentes.create({
        nombre,
        apellido,
        user_id: newUser.id,
      });

      res.redirect("/login");
    } else {
      res.json("usuario ya registrado");
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const crearAdministrador = async (req, res) => {
  try {
    const { name, email, password, nombre, apellido } = req.body;

    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      const newUser = await Users.create({
        name,
        email,
        password,
      });

      const newAdmin = await Administradores.create({
        nombre,
        apellido,
        user_id: newUser.id,
      });

      res.redirect("/login");
    } else {
      res.json("usuario ya registrado");
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const eliminarUsuario = async (req, res) => {
  const id = req.params.id;

  const deleteUser = await Users.destroy({
    where: { id },
  });

  res.json(deleteUser);
};

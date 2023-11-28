import bodyParser from "body-parser";
import { estilos } from "../css.js";
import { Users } from "../models/Users.model.js";
import { Estudiantes } from "../models/Estudiante.model.js";
import { Docentes } from "../models/Docentes.model.js";
import { Administradores } from "../models/Administradores.model.js";

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

export const getRegisterAdministrador = async (req, res) => {
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

      res.json(newUser);
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

      res.json(newDocente);
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

      res.json("usuario creado");
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

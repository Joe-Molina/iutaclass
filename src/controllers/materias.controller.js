import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { Materias } from "../models/Materias.model.js";

export const getMaterias = (req, res) => {};

export const crearMateria = async (req, res) => {
  const { name, seccion, carrera_id } = req.body;

  const newMateria = await Materias.create({
    name,
    seccion,
    carrera_id,
  });

  res.json(newMateria);
};

export const eliminarMateria = (req, res) => {
  const id = req.params.id;

  Materias.delete({
    where: { id },
  });
};

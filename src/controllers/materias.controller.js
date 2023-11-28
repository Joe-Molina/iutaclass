import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { Materias } from "../models/Materias.model.js";
import { Carreras } from "../models/Carreras.model.js";

export const getCarreras = async (req, res) => {
  const carreras = await Carreras.findAll();

  res.json(carreras);
};

export const crearCarrera = async (req, res) => {
  const { name } = req.body;

  const newMateria = await Carreras.create({
    name,
  });

  res.json(newMateria);
};

export const getMaterias = async (req, res) => {
  const materias = await Materias.findAll();

  res.json(materias);
};

export const crearMateria = async (req, res) => {
  const { name, carrera_id } = req.body;

  const newMateria = await Materias.create({
    name,
    carrera_id,
  });

  res.json(newMateria);
};

export const eliminarMateria = async (req, res) => {
  const id = req.params.id;

  const deleteMateria = await Materias.destroy({
    where: { id },
  });

  res.json(deleteMateria);
};

export const eliminarCarrera = async (req, res) => {
  const id = req.params.id;

  const deleteCarrera = await Carreras.destroy({
    where: { id },
  });

  res.json(deleteCarrera);
};

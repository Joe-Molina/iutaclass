import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { Calificaciones } from "../models/Calificaciones.model.js";

export const getcalificaciones = async (req, res) => {
  try {
    const calificaciones = await Calificaciones.findAll();

    res.json(calificaciones);
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const puntuar = async (req, res) => {
  try {
    const evaluacion_estudiante_id = req.params.evaluacion;

    const { puntaje } = req.body;

    const puntuar = await Calificaciones.create({
      puntaje,
      evaluacion_estudiante_id,
    });

    res.json(puntuar);
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

import bodyParser from "body-parser";
import session from "express-session";
import myConnection from "express-myconnection";
import multer from "multer";
import path from "path";
import fs from "fs";
import { estilos } from "../css.js";
import { aulas } from "../models/aulas.model.js";
import { IntegrantesAulas } from "../models/integrantes_aulas.models.js";
import { Unidades } from "../models/Unidades.models.js";
import { Evaluacion_estudiante } from "../models/Evaluacion_estudiante.model.js";

export const getEvaluaciones = async (req, res) => {
  const evaluaciones = await Evaluacion_estudiante.findAll();

  res.json(evaluaciones);
};

export const subirEvaluacion = async (req, res) => {
  const unidad_id = req.params.id;

  const unidad = await Unidades.findOne({
    where: { id: unidad_id },
  });

  const integranteAulaId = await IntegrantesAulas.findOne({
    where: {
      aula_id: unidad.aula_id,
      estudiante_id: req.session.estudiante_id,
    },
  });

  const { descripcion, archivo_evaluacion } = req.body;

  const subirEvaluacion = await Evaluacion_estudiante.create({
    descripcion,
    archivo_evaluacion,
    unidad_id,
    integrante_aula_id: integranteAulaId.id,
  });

  res.json(subirEvaluacion);
};

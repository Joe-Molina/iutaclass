import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { Estudiantes } from "../models/Estudiante.model.js";
import { aulas } from "../models/aulas.model.js";
import { Materias } from "../models/Materias.model.js";
import { Carreras } from "../models/Carreras.model.js";
import { Unidades } from "../models/Unidades.models.js";
import { IntegrantesAulas } from "../models/integrantes_aulas.models.js";
import { Evaluacion_estudiante } from "../models/Evaluacion_estudiante.model.js";
import { DetallesUnidades } from "../models/UnidadesDetails.models.js";

export const getIndex = async (req, res) => {
  try {
    const estudiante = await Estudiantes.findOne({
      where: { id: req.session.estudiante_id },
    });

    const Aulas = await IntegrantesAulas.findAll({
      where: { estudiante_id: req.session.estudiante_id },
      include: [
        {
          model: aulas,
          include: [{ model: Materias, include: [{ model: Carreras }] }],
        },
      ],
    });

    res.json([estudiante, Aulas]);

    //res.render("estudiante/index_estudiante", { estudiante, Aulas });
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const getAulaEstudiante = async (req, res) => {
  const aula = await aulas.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Unidades,
        include: [{ model: DetallesUnidades }],
      },
    ],
  });

  res.json(aula);
};

export const getEvaluacionesUnidadEstudiante = async (req, res) => {
  const id_estudiante = req.session.estudiante_id;

  const evaluacionesEstudiante = await Estudiantes.findOne({
    where: { id: id_estudiante },
    include: [
      {
        model: IntegrantesAulas,
        include: [{ model: Evaluacion_estudiante }],
      },
    ],
  });

  res.json(evaluaciones_unidad);
};

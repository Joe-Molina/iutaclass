import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { Docentes } from "../models/Docentes.model.js";
import { aulas } from "../models/aulas.model.js";
import { Materias } from "../models/Materias.model.js";
import { Carreras } from "../models/Carreras.model.js";
import { Unidades } from "../models/Unidades.models.js";
import { DetallesUnidades } from "../models/UnidadesDetails.models.js";
import { Evaluacion_estudiante } from "../models/Evaluacion_estudiante.model.js";
export const getIndex = async (req, res) => {
  try {
    const docente = await Docentes.findOne({
      where: { id: req.session.docente_id },
    });

    const Aulas = await aulas.findAll({
      where: { docente_id: req.session.docente_id },
      include: [
        { model: Materias, include: [{ model: Carreras }] },
        { model: Unidades },
        { model: Docentes },
      ],
    });

    //res.json(Aulas);
    res.render("docente/index_docente", { docente, Aulas });
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const getAulaDocente = async (req, res) => {
  const docente = await Docentes.findOne({
    where: { id: req.session.docente_id },
  });

  const aula = await aulas.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Unidades,
        include: [{ model: DetallesUnidades }],
      },
    ],
  });

  req.session.create_unidad_aulaid = aula.id;

  //res.json(aula.unidades);

  res.render("docente/aula_docente", { unidades: aula.unidades, docente });
};

export const getEvaluacionesUnidadDocente = async (req, res) => {
  const unidad_id = req.params.id;

  const evaluaciones_unidad = await Evaluacion_estudiante.findAll({
    where: { unidad_id: unidad_id },
  });

  res.json(evaluaciones_unidad);
};

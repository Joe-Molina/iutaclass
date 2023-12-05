import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { Calificaciones } from "../models/Calificaciones.model.js";
import { Evaluacion_estudiante } from "../models/Evaluacion_estudiante.model.js";
import { Estudiantes } from "../models/Estudiante.model.js";
import { IntegrantesAulas } from "../models/integrantes_aulas.models.js";
import { Docentes } from "../models/Docentes.model.js";

export const getcalificaciones = async (req, res) => {
  try {
    const docente = await Docentes.findOne({
      where: { id: req.session.docente_id },
    });

    const evaluacionesSubidas = await Evaluacion_estudiante.findAll({
      where: { unidad_id: req.params.id },
      include: [
        {
          model: Calificaciones,
        },
        {
          model: IntegrantesAulas,
          include: [
            {
              model: Estudiantes,
            },
          ],
        },
      ],
    });

    // res.json(evaluacionesSubidas);
    res.render("docente/calificar_docente", { evaluacionesSubidas, docente });
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const puntuar = async (req, res) => {
  try {
    const { puntaje, evaluacion_estudiante_id } = req.body;

    const puntuar = await Calificaciones.create({
      puntaje,
      evaluacion_estudiante_id,
    });

    // res.json(puntuar);
    res.redirect("../inicio/docente");
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

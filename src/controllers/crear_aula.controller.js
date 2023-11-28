import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { Materias } from "../models/Materias.model.js";
import { Docentes } from "../models/Docentes.model.js";
import { aulas } from "../models/aulas.model.js";
import { IntegrantesAulas } from "../models/integrantes_aulas.models.js";

export const getAulas = async (req, res) => {
  // buscar usuarios docente
  // buscar materias
  try {
    const Aulas = await aulas.findAll();

    res.json(Aulas);
  } catch (error) {}
};

export const CrearAula = async (req, res) => {
  const { docente_id, materia_id } = req.body;

  const newAula = await aulas.create({
    docente_id,
    materia_id,
  });

  res.json(newAula);
};

export const deleteAula = async (req, res) => {
  const id = req.params.id;

  const auladestroy = await aulas.destroy({
    where: { id },
  });

  res.json(auladestroy);
};

////////////////////////////////////////////////

export const getAulasEstudiante = async (req, res) => {
  try {
    // funcion para buscar las aulas a las que pertenece un estudiante
    const AulasIntegrante = await IntegrantesAulas.findAll({
      where: { estudiante_id: req.session.estudiante_id },
      include: [
        {
          model: aulas,
        },
        {
          model: Docentes,
        },
        {
          model: Materias,
        },
      ],
    });

    res.json(AulasIntegrante);
  } catch (error) {}
};

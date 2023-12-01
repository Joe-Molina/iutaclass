import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { aulas } from "../models/aulas.model.js";
import { Estudiantes } from "../models/Estudiante.model.js";
import { IntegrantesAulas } from "../models/integrantes_aulas.models.js";
import { Materias } from "../models/Materias.model.js";
import { Docentes } from "../models/Docentes.model.js";

export const getAsignarAula = async (req, res) => {
  const estudiantes = await Estudiantes.findAll();
  const Aulas = await aulas.findAll();

  res.json([estudiantes, Aulas]);
};

export const getEstudianteAulas = async (req, res) => {
  // funcion para estudiante
  // guardar en una variable el id de estudiante al iniciar sesion para buscar las aulas a las que esta asignado ese estudiante

  const estudianteAulas = await IntegrantesAulas.findAll({
    where: { estudiante_id: req.session.estudiante_id },
    include: [
      {
        model: aulas,
        include: [
          {
            model: Docentes,
          },
          {
            model: Materias,
          },
        ],
      },
    ],
  });

  res.json(estudianteAulas);
};

export const getEstudiantesAulas = async (req, res) => {
  // funcion para admin trae todos los integrante de todas las aulas

  const estudiantesAulas = await IntegrantesAulas.findAll();

  res.json(estudiantesAulas);
};

export const asignarEstudianteAAula = async (req, res) => {
  const { estudiante_id, aula_id } = req.body;

  const asignarEstudiante = await IntegrantesAulas.create({
    estudiante_id,
    aula_id,
  });

  //res.json(asignarEstudiante);
  res.redirect(`admin/asignaraula/${aula_id}`);
};

export const deleteEstudianteAula = async (req, res) => {
  const integranteAula_id = req.params.id;

  const integranteEliminado = await IntegrantesAulas.destroy({
    where: { id: integranteAula_id },
  });

  res.json(integranteEliminado);
};

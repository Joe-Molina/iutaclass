import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { aulas } from "../models/aulas.model.js";
import { Unidades } from "../models/Unidades.models.js";
import { DetallesUnidades } from "../models/UnidadesDetails.models.js";

export const verUnidades = async (req, res) => {
  const aula_id = req.params.id;

  const UnidadesAula = await Unidades.findAll({
    where: { aula_id },
    include: DetallesUnidades,
  });

  res.json(UnidadesAula);
};

export const getCrearUnidad = async (req, res) => {
  try {
    const docente_id = req.session.docente_id;

    const aulasProfesor = await aulas.findAll({
      where: { docente_id },
    }); // con esto obtengo el id del aula para crear la unidad

    res.json(aulasProfesor);

    // quedo pendiente por verificar cuando pueda logearme como docente y crear un aula
  } catch (err) {
    console.error(err);
  }
};

export const CrearUnidad = async (req, res) => {
  const { nombre, descripcion, tipo_evaluacion, archivo_evaluacion } = req.body;

  const crearUnidad = await Unidades.create({
    aula_id: req.session.create_unidad_aulaid,
  });

  const crearDetallesUnidad = await DetallesUnidades.create({
    nombre,
    descripcion,
    tipo_evaluacion,
    unidad_id: crearUnidad.id,
    archivo_evaluacion: req.file.filename,
  });

  res.redirect(`docente/aula/${req.session.create_unidad_aulaid}`);
};

export const deleteUnidad = async (req, res) => {
  const unidad_id = req.params.id;

  const eliminarUnidadDetail = await DetallesUnidades.destroy({
    where: { unidad_id },
  });

  const eliminarUnidad = await Unidades.destroy({
    where: { id: unidad_id },
  });

  res.json([eliminarUnidad, eliminarUnidadDetail]);
};

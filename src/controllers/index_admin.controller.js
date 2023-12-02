import { Docentes } from "../models/Docentes.model.js";
import { Carreras } from "../models/Carreras.model.js";
import { Materias } from "../models/Materias.model.js";
import { aulas } from "../models/aulas.model.js";
import { Estudiantes } from "../models/Estudiante.model.js";
import { IntegrantesAulas } from "../models/integrantes_aulas.models.js";

export const admin = async (req, res) => {
  try {
    const docentes = await Docentes.findAll();

    const carreras = await Carreras.findAll();

    const materiass = await Materias.findAll();
    const Aulas = await aulas.findAll({
      include: [
        {
          model: Docentes,
        },
        {
          model: Materias,
        },
      ],
    });

    console.log(Aulas);

    res.render("aadmin/crear_aulas", {
      docentes,
      carreras,
      materiass,
      Aulas,
    });
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const adminAsignarAula = async (req, res) => {
  try {
    const aula_id = req.params.id;

    const carrera = await aulas.findOne({
      where: { id: aula_id },
      include: [
        {
          model: Materias,
          include: [
            {
              model: Carreras,
            },
          ],
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

    const carrera_id = carrera.materia.carrera_id;

    const estudiantes = await Estudiantes.findAll({
      where: { carrera_id },
    });

    // res.json(carrera);

    res.render("aadmin/asignar_aulas", {
      estudiantes,
      aula_id,
      carrera,
    });
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

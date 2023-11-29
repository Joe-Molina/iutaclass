import { Docentes } from "../models/Docentes.model.js";
import { Carreras } from "../models/Carreras.model.js";
import { Materias } from "../models/Materias.model.js";
import { aulas } from "../models/aulas.model.js";

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

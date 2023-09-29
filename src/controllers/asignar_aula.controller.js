import bodyParser from "body-parser";
import session from "express-session";
import myConnection from "express-myconnection";
import { estilos } from "../css.js";
import { Users } from "../models/Users.model.js";
import { aulas } from "../models/aulas.model.js";
import { Alumnos } from "../models/alumnos.model.js";
export const getAsignarAula = async (req, res) => {
  // buscar usuarios estudiantes y guardarlo en una variable
  // seleecionar todas las aulas
  //

  try {
    if (req.session.userType == 1) {
      const estudiantes = await Users.findAll({
        where: {
          userType: 2,
        },
      });
      const aaulas = await aulas.findAll();

      res.json("tengo estudiantes y aulas");
    } else {
    }
  } catch (error) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const postAsignarAula = async (req, res) => {
  const { user_id, aula_id } = req.body;

  const newAlumno = Alumnos.create({
    user_id,
    aula_id,
  });
};
